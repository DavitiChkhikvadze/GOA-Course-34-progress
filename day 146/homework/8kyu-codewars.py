#1 - Convert number to reversed array of digits
def digitize(n):
    result = []
    new_n = str(n)[::-1]
    for i in str(new_n):
        result.append(int(i))
    return result

#2 - Remove String Spaces
def no_space(x):
    str = ''
    for i in x:
        if i != ' ':
            str += i
    return str

#3 - Convert a Number to a String!
def number_to_string(num):
    return str(num)

#4 - Grasshopper - Summation
def summation(num):
    sum = 0
    for i in range(1, num + 1):
        sum += i
    return sum

#5 - Do I get a bonus?
def bonus_time(salary, bonus):
    if bonus == True:
        return '$' + str(salary*10)
    elif bonus == False:
        return '$' + str(salary)