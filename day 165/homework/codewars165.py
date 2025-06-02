#N1 - Find numbers which are divisible by given number
def divisible_by(numbers, divisor):
    res = []
    for i in numbers:
        if i % divisor == 0:
            res.append(i)
    return res

#N2 - Stringy Strings
def stringy(size):
    arr=[]
    for i in range(size):
        if i%2==0:
            arr.append('1')
        else:
            arr.append('0')
    return ''.join(arr)

#N3 - Palindrome chain length
def palindrome_chain_length(n):
    steps = 0
    while str(n) != str(n)[::-1]:
        n = n + int(str(n)[::-1])
        steps += 1
    return steps

#N4 - IP Validation
def is_valid_IP(string):
    parts = string.split(".")
    if len(parts)!=4:
        return False
    for item in parts:
        if not item.isdigit():
            return False
        if len(item)>1 and item[0]=='0':
            return False
        i = int(item)
        if i <0 or i >255:
            return False
    return True