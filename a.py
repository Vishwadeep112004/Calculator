not_valid=True
while not_valid:
    a=input("create the passward: ")
    cnt=0
    for i in a:
        if i.isupper():
            cnt+=1
        if i.islower():
            cnt+=1
        if i==' ':
            cnt+=1
        if i.isdigit():
            cnt+=1
    if len(a)>=8:
        cnt+=1
    if cnt>=4:
        not_valid=False
    if not_valid:
        print("Create valid passward")
print("passward is valid")