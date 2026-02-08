import math
import os
from PIL import Image

# Configuration
INPUT_DIR = '/Users/manish/Documents/GitHub/lbx-world/public/assets/car-side'
OUTPUT_FILE = '/Users/manish/Documents/GitHub/lbx-world/public/assets/car-side-sprite.jpg'
FRAME_COUNT = 124
COLS = 12
FRAME_WIDTH = 640  # Resize to half width
FRAME_HEIGHT = 360 # Resize to half height

def generate_sprite_sheet():
    # Calculate dimensions
    rows = math.ceil(FRAME_COUNT / COLS)
    sheet_width = COLS * FRAME_WIDTH
    sheet_height = rows * FRAME_HEIGHT
    
    print(f"Creating sprite sheet: {sheet_width}x{sheet_height}")
    
    # Create blank canvas
    sprite_sheet = Image.new('RGB', (sheet_width, sheet_height), (0, 0, 0))
    
    for i in range(1, FRAME_COUNT + 1):
        filename = f"ezgif-frame-{str(i).zfill(3)}.jpg"
        filepath = os.path.join(INPUT_DIR, filename)
        
        try:
            with Image.open(filepath) as img:
                # Resize
                img_resized = img.resize((FRAME_WIDTH, FRAME_HEIGHT), Image.Resampling.LANCZOS)
                
                # Calculate position
                idx = i - 1
                col = idx % COLS
                row = idx // COLS
                x = col * FRAME_WIDTH
                y = row * FRAME_HEIGHT
                
                # Paste
                sprite_sheet.paste(img_resized, (x, y))
                print(f"Processed frame {i}/{FRAME_COUNT}", end='\r')
        except Exception as e:
            print(f"\nError processing {filename}: {e}")

    # Save
    print("\nSaving sprite sheet...")
    sprite_sheet.save(OUTPUT_FILE, format='JPEG', quality=85, optimize=True)
    print(f"Saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    generate_sprite_sheet()
