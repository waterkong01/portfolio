import os
import re
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin

# 웹사이트 URL
website_url = "https://mangtira.com/kr/"

# =저장할 폴더
download_folder = "C:\KH\img"

response = requests.get(website_url)
soup = BeautifulSoup(response.text, "html.parser")

# <span> 태그
span_tags = soup.find_all("span")

for span_tag in span_tags:
    style_attr = span_tag.get("style")
    if style_attr:
        match = re.search(r'background\s*:\s*url\((.*?)\)', style_attr)
        if match:
            img_url = match.group(1).strip(" '")
            
            img_url = urljoin(website_url, img_url)

            img_name = os.path.basename(urlparse(img_url).path)
            
            img_data = requests.get(img_url).content
            with open(os.path.join(download_folder, img_name), "wb") as img_file:
                img_file.write(img_data)