def from_one_to_n(n):
    if n == 1:
        return [1]
    return from_one_to_n(n - 1) + [n]

print(from_one_to_n(5))

def from_n_to_one(n):
    if n == 1:
        return [1]
    return [n] + from_n_to_one(n - 1)

print(from_n_to_one(5)) 

def sum_array(arr):
    if not arr:
        return 0
    return arr[0] + sum_array(arr[1:])

print(sum_array([1, 2, 3, 4]))

def count_elements(arr):
    if not arr:
        return 0
    return 1 + count_elements(arr[1:])

print(count_elements([5, 10, 15, 20]))

def reverse_string(s):
    if len(s) == 0:
        return ""
    return s[-1] + reverse_string(s[:-1])

print(reverse_string("daviti"))

def find_max(arr):
    if len(arr) == 1:
        return arr[0]
    sub_max = find_max(arr[1:])
    return arr[0] if arr[0] > sub_max else sub_max

print(find_max([3, 10, 7, 25, 9]))

def count_vowels(s):
    vowels = "aeiouAEIOU"
    if not s:
        return 0
    return (1 if s[0] in vowels else 0) + count_vowels(s[1:])

print(count_vowels("David"))

