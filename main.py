import nltk
from nltk.stem.lancaster import LancasterStemmer
stemmer=LancasterStemmer()


import numpy 
import tflearn
import random
import json

with open("intents.json") as file:
  data=json.load(file)
words=[]
labels=[]
docs=[]
docs_y=[]
docs_x=[]

for intent in data["intents"]:
  for pattern in intent["patters"]:
    wrds=nltk.word_tokenize(pattern)
    words.extend(wrds)
    docs_x.append(pattern)
    docs_y.append(intent["tag"])

    if intent["tag"] not in labels:
      labels.append(intent["tags"])

words=[stemmer.stem(w.lower()) for w in words]
words=sorted(list(set(words)))

labels=sorted(labels)
training=[]
output=[]

out_empty=[0 for _ in range(len(classes))]
for x, doc in enumerate(docs_x):
  bag=[]
  wrds=[stemmer.stem(w) for w in doc]

  for w in words:
    if w in wrds:
      bag.append(1)
    else:
      bag.append(0)

  output_row=out_empty[:]
  output_row[labels.index(docs_y[x])]=1
  
  training.append(bag)
  output.append(output_row)

training=numpy.array(training)
output= numpy.array(output)