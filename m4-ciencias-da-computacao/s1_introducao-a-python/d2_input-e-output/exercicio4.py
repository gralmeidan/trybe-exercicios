import json
import csv

books = []
counter = {}

with open('books.json') as file:
    books = json.load(file)

for book in books:
    for category in book['categories']:
        if category in counter:
            counter[category] += 1
        else:
            counter[category] = 1

with open('result.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerow(['categoria', 'porcentagem'])
    for category, count in counter.items():
        percentage = (count * 100) / len(books)
        writer.writerow([category, percentage])
