#N1 - Unique string characters
def solve(a,b):
    unique=[]
    for i in a:
        if i not in b:
            unique.append(i)
    for i in b:
        if i not in a:
            unique.append(i)
            
    return "".join(unique)

#N2 - Zero Terminated Sum
def largest_sum(s):
    max_sum = 0
    tmp = 0
    for c in s:
        if c != '0':
            tmp += int(c)
        else:
            max_sum = max(max_sum, tmp)
            tmp = 0
    return max_sum

#N3 - What comes after?
def comes_after(st, l):
    target_letter = l.lower()
    result = ""
    
    for letter in range (len(st) - 1):
        if st[letter].lower() == target_letter:
            if st[letter + 1].isalpha():
                result+=st[letter + 1]
       
    return result

#N4 - Cats in hats
def height(n):
    height = cat = 2000000
    for i in range(n):
        cat /= 2.5
        height += cat
    return f'{height:.3f}'

#N5 - Decoding the message
def decode(_m):
    out = ''
    for i in _m:
        if ord(i) > 96:
            out += "zyxwvutsrqponmlkjihgfedcba"["abcdefghijklmnopqrstuvwxyz".index(i)]
        else:
            out += i
    return out