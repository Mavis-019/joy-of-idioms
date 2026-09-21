from PIL import Image, ImageDraw, ImageFont
import os

OUT_DIR = "/Users/mavis/Downloads/悦读成语/public/images"
FONT_PATH = "/System/Library/Fonts/Supplemental/Songti.ttc"

def add_chinese_text(input_path, output_path, text):
    img = Image.open(input_path).convert("RGB")
    W, H = img.size
    draw = ImageDraw.Draw(img)

    # 字体大小：图片宽度的 1/18
    font_size = int(W / 18)
    font = ImageFont.truetype(FONT_PATH, font_size)

    # 计算文字位置（底部居中，距底边 3%）
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (W - tw) / 2
    y = H - th - int(H * 0.03)

    # 画半透明墨色底条（让字更醒目）
    bar_h = th + int(H * 0.025)
    bar_top = y - int(H * 0.008)
    bar = Image.new("RGBA", (W, bar_h), (28, 28, 23, 0))
    img.paste(bar, (0, bar_top), bar)

    # 画文字：深墨色 #1c1c17
    draw.text((x, y), text, fill=(28, 28, 23), font=font)

    # 保存
    os.makedirs(OUT_DIR, exist_ok=True)
    img.save(output_path, "JPEG", quality=92)
    print(f"OK: {output_path}  ({W}x{H})")

# 图1：盲人摸象
add_chinese_text(
    "/Users/mavis/Downloads/trae1.jpeg",
    os.path.join(OUT_DIR, "card_blindmen_elephant.jpg"),
    "盲人摸象"
)

# 图2：守株待兔
add_chinese_text(
    "/Users/mavis/Downloads/trae2.jpg",
    os.path.join(OUT_DIR, "card_waiting_hare.jpg"),
    "守株待兔"
)
