import os

# ===== CONFIGURATION =====
folder_path = r"C:\Users\kinya\Desktop\Sketchline_build\public"  # Change this
base_name = "sketchlinebuild"  # New base name
start_number = 1
# =========================

files = os.listdir(folder_path)

# Filter only files (ignore folders)
files = [f for f in files if os.path.isfile(os.path.join(folder_path, f))]

counter = start_number

for filename in files:
    old_path = os.path.join(folder_path, filename)

    name, extension = os.path.splitext(filename)

    new_filename = f"{base_name}_{counter}{extension}"
    new_path = os.path.join(folder_path, new_filename)

    os.rename(old_path, new_path)

    print(f"Renamed: {filename} → {new_filename}")

    counter += 1

print("Done.")
