from PIL import Image
import numpy as np

image_path = "E:\Javascript\Day4\mohanlal.jpg"  
img = Image.open(image_path).convert("RGB")  # Convert image to RGB format

# Convert the image into a NumPy matrix
img_matrix = np.array(img)

print("Original Image Matrix:")
print(img_matrix)
print("Matrix Shape:", img_matrix.shape) 
# from PIL import Image,ImageDraw, ImageFont
# import numpy as np
# from scipy.ndimage import uniform_filter

# image_path = "E:\Javascript\Day4\mohanlal.jpg"  
# img = Image.open(image_path).convert("RGB")
# img_matrix = np.array(img)

# def apply_blur(image_matrix, kernel_size=3):
#     blurred_matrix = np.zeros_like(image_matrix)
#     for i in range(3):  
#         blurred_matrix[:, :, i] = uniform_filter(image_matrix[:, :, i], size=kernel_size)
#     return blurred_matrix


# blurred_image_matrix = apply_blur(img_matrix)


# blurred_img = Image.fromarray(blurred_image_matrix.astype("uint8"))


# draw = ImageDraw.Draw(blurred_img)


# try:
#     font = ImageFont.truetype("arial.ttf", 140)  
# except IOError:
#     font = ImageFont.load_default()  


# text = "Mohanlal"  
# position = (250, 250)  
# text_color = (145, 25, 5)  

# draw.text(position, text, font=font)


# blurred_img.save("blurred_with_text.jpg")
# print("Image with text saved as 'blurred_with_text.jpg'")