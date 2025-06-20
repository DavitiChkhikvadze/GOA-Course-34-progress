#N1 - How many permutations where indices change by at most 1
def permuts(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return b

#N2 - Find array
def find_array(arr1, arr2):
    list1 =[]    
    for num in arr2:
        if num < len(arr1):
            list1.append(arr1[num])
    return list1

#N3 - Sentence Calculator
def letters_to_numbers(sentence):
    result = 0
    
    for char in sentence:
        char_code = ord(char)

        if 97 <= char_code <= 122:
            result += (char_code - 96)

        if 65 <= char_code <= 90:
            result += (char_code - 64) * 2

        if 48 <= char_code <= 57:
            result += (char_code - 48)
    
    return result

#N4 - Alphabet war - airstrike - letters massacre
def alphabet_war(fight):
  s = 'wpbsszdqm'
  alive = []

  if '*' not in fight[:2]:
    alive.append(fight[0])

  for i, c  in enumerate(fight[1:], 1):
    if '*' not in fight[i-1:i+2]:
      alive.append(c)
  
  x = sum(4 - s.index(c) for c in alive if c in s)
  return 'Let\'s fight again!' if x==0 else ['Left','Right'][x<0] + ' side wins!'

#N5 - Street Bowling
def bowling_test(s, r):
    if len(r) <= s:
        return True
    elif s <= 0 and r:
        return False
    cracks = r[:s].count('x')
    return bowling_test(s-1-cracks, r[s:])

