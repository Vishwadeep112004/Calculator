sec=int(input("Enter the seconds"))
hrs=sec//3600
sec-=hrs*3600
minuts=sec//60
sec-=minuts*60

print("hrs:",hrs)
print("min:",minuts)
print("sec:",sec)
