"""Prepare web images from the original Bendie photographs and the found open-licence images.
Run: python3 -I scripts/process_media.py <bendie_img_dir>
Only resampling (Lanczos), a mild sharpen and a shared colour grade are applied: no generative tools."""
import sys, os
from PIL import Image, ImageEnhance, ImageFilter

SRC = sys.argv[1]
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'media')
FOUND = os.path.join(os.path.dirname(__file__), '..', 'assets-src')
os.makedirs(OUT, exist_ok=True)

# name -> (source file, target width, grade)
B = {
  'hero-impressive-2200': ('nieuwbouw__impressive-2200__016.jpg', [2400, 1400, 800]),
  'i2200-maas': ('nieuwbouw__impressive-2200__023.jpg', [1400, 800]),
  'i2200-hut': ('nieuwbouw__impressive-2200__031.jpg', [1200, 700]),
  'i2200-badkamer': ('nieuwbouw__impressive-2200__003.jpg', [900, 500]),
  'i2200-kombuis': ('nieuwbouw__impressive-2200__044.jpg', [1400, 800]),
  'i2200-kikkers': ('nieuwbouw__impressive-2200__075.jpg', [1400, 800]),
  'i2200-scheepsbel': ('nieuwbouw__impressive-2200__099.jpg', [1000, 600]),
  'i2200-romp': ('nieuwbouw__impressive-2200__104.jpg', [1000, 600]),
  'i2200-salon': ('nieuwbouw__impressive-2200__002.jpg', [1000, 600]),
  'i2200-trap': ('nieuwbouw__impressive-2200__040.jpg', [900, 500]),
  'i1800-varend': ('nieuwbouw__impressive__2151.jpg', [900, 500]),
  'i1800-zijkant': ('nieuwbouw__impressive__2134.jpg', [900, 500]),
  'i1800-boeg': ('nieuwbouw__impressive__2146.jpg', [900, 500]),
  'i1800-salon': ('nieuwbouw__impressive__dsc03545.jpg', [900, 500]),
  'i1800-stuurstand': ('nieuwbouw__impressive__dsc03551.jpg', [900, 500]),
  'i1800-kombuis': ('nieuwbouw__impressive__dsc03566.jpg', [900, 500]),
  'i1800-dinette': ('nieuwbouw__impressive__dsc03568.jpg', [900, 500]),
  'i1800-hut': ('nieuwbouw__impressive__dsc03569.jpg', [900, 500]),
  'i1800-machinekamer': ('nieuwbouw__impressive__img_2179.jpg', [900, 500]),
  'i1800-motoren': ('nieuwbouw__impressive__img_2181.jpg', [900, 500]),
  't1800-varend': ('nieuwbouw__trawler-1800__trawler8.jpg', [900, 500]),
  't1800-boeg': ('nieuwbouw__trawler-1800__trawler9.jpg', [900, 500]),
  't1800-salon': ('nieuwbouw__trawler-1800__trawler1.jpg', [900, 500]),
  't1800-stuurstand': ('nieuwbouw__trawler-1800__trawler3.jpg', [900, 500]),
  't1800-kombuis': ('nieuwbouw__trawler-1800__trawler6.jpg', [900, 500]),
  't1800-dinette': ('nieuwbouw__trawler-1800__trawler7.jpg', [900, 500]),
  't53-varend': ('nieuwbouw__trawler-53__img_0468.jpg', [900, 500]),
  't53-ochtend': ('nieuwbouw__trawler-53__img_0464.jpg', [900, 500]),
  't53-kade': ('nieuwbouw__trawler-53__img_0453.jpg', [900, 500]),
  't53-salon': ('nieuwbouw__trawler-53__afbeelding025.jpg', [900, 500]),
  't53-kombuis': ('nieuwbouw__trawler-53__afbeelding026.jpg', [900, 500]),
  't53-office': ('nieuwbouw__trawler-53__afbeelding031.jpg', [900, 500]),
  't53-machinekamer': ('nieuwbouw__trawler-53__afbeelding036.jpg', [900, 500]),
  't53-buitenstuur': ('nieuwbouw__trawler-53__afbeelding023.jpg', [900, 500]),
  't53-plan': ('nieuwbouw__trawler-53__interiorplan-broad.jpg', [900]),
  'onderhoud-machinekamer': ('img_2183.jpg', [900, 500]),
  'onderhoud-installatie': ('img_2179.jpg', [900, 500]),
  'winterberging-hal': ('winterberging.jpg', [900, 500]),
}
F = {
  'maas-cuijk-kade': ('2013-05-31-122710-ship-maas-cuijk.jpg', [1920, 1200, 700]),
  'maas-cuijk-oever': ('2013-05-31-122716-maas-cuijk.jpg', [1920, 1200, 700]),
  'archief-helling': ('de-haarlemse-jachtwerf-j-van-opzeeland-aan.jpg', [1400, 800]),
  'archief-laswerk': ('this-photograph-shows-a-workman-welding-at.jpg', [1400, 800]),
}

def grade(im):
    # one shared grade for 2000s digital photographs: a touch less saturation, a touch more contrast
    im = ImageEnhance.Color(im).enhance(0.88)
    im = ImageEnhance.Contrast(im).enhance(1.05)
    return im

def emit(name, path, widths, do_grade):
    im = Image.open(path).convert('RGB')
    if do_grade: im = grade(im)
    for w in widths:
        r = im
        if im.width != w:
            h = round(im.height * w / im.width)
            r = im.resize((w, h), Image.LANCZOS)
            if w > im.width:
                r = r.filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=2))
        suffix = '' if w == widths[0] else f'-{w}'
        r.save(os.path.join(OUT, f'{name}{suffix}.jpg'), quality=82, optimize=True, progressive=True)
        r.save(os.path.join(OUT, f'{name}{suffix}.webp'), quality=78, method=6)
    print(name, im.size, '->', widths)

for n, (f, w) in B.items(): emit(n, os.path.join(SRC, f), w, True)
for n, (f, w) in F.items(): emit(n, os.path.join(FOUND, f), w, False)
