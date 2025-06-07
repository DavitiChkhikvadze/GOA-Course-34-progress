#N1 - The Feast of Many Beasts
def feast(beast, dish):
    return beast[0] == dish[0] and beast[-1] == dish[-1]

#N2 - Will there be enough space?
def enough(cap, on, wait):
    return max(0, wait - (cap - on))

#N3 - Count Odd Numbers below n
def odd_count(n):
    count = 0
    for i in range(n):
        if i % 2 > 0:
            count += 1
    return count

#N4 - 5 without numbers !!
def unusual_five():
    return len("abcde")