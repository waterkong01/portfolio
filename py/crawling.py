import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin

website_url = "https://mangtira.com/kr/"

download_folder = "C:\KH\img"

if not os.path.exists(download_folder):
    os.makedirs(download_folder)

response = requests.get(website_url)
soup = BeautifulSoup(response.text, "html.parser")

a_tags = soup.find_all("a")
a_tags_inside_a = [a.find("img") for a in a_tags if a.find("img")]

for a_tag in a_tags:
    img_url = a_tag.get("src")
    
    img_url = urljoin(website_url, img_url)

    img_name = os.path.basename(urlparse(img_url).path)

    img_data = requests.get(img_url).content
    with open(os.path.join(download_folder, img_name), "wb") as img_file:
        img_file.write(img_data)