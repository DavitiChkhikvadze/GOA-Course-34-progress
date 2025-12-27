libr = [["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"," "],
        ["0","1","2","3","4","5","6","7","8","9","q","m","w","n","e","b","r","v","t","c","y","x","u","z","i","l"," "]]

def decrypt(): 
    decoded = ""
    massive = input("massage: ")
    for i in massive:
        for j in range(len(libr[0])):
            if i == libr[1][j]:
                decoded += libr[0][j]
    return decoded

def encrypt():
    encoded1 = ""
    msg = input("word: ")
    for i in msg:
        for j in range(len(libr[0])):
            if i == libr[0][j]:
                encoded1 += libr[1][j]
    return encoded1

while True:
    prompt = input("enter command (dec/enc): ") #command input

    if prompt == "dec": # add more commands
        print(decrypt())
    elif prompt == "enc":
        print(encrypt())
    print("- ^ - executed successfully - -")