#N1 - Upside down numbers
def solve(a, b):
    s = {'0','1','6','8','9'}
    total = 0
    for i in range(a, b):
        if i < 10:
            if i in (0, 1, 8): total += 1
        else:
            n = str(i)
            if set(n).issubset(s):
                left, right = 0, len(n)-1
                while left <= right:
                    ln = n[left]
                    rn = n[right]
                    if left == right and ln in '69':
                        break
                    if ln + rn in ('69', '96') or (ln == rn and ln in '018'):
                        left += 1
                        right -= 1
                    else: break
                if left > right: total += 1

            else:
                continue
    return total

#N2 - Equal Sides Of An Array
def find_even_index(arr):
    for i in range(len(arr)):
        if sum(arr[:i]) == sum(arr[i+1:]):
            return i
    return -1

#N3 - Ones and Zeros
def binary_array_to_number(arr):
    result = 0
    for i in arr:
        result = result * 2 + i
    return result

#N4 - Printer Errors
def printer_error(s):
    errors = 0
    count = len(s)
    for i in s:
        if i > "m":
            errors += 1
    return str(errors) + "/" + str(count)