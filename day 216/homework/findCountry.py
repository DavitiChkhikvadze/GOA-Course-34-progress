def find_country(countries, target_country):
    left = 0
    right = len(countries) - 1

    while left <= right:
        # შუა ინდექსის გამოთვლა
        mid = (left + right) // 2
        
        # მიმდინარე შუა ელემენტი
        current_country = countries[mid]

        # 1. ზუსტი დამთხვევა
        if current_country == target_country:
            return mid
        
        # 2. თუ შუა ქვეყანა ლექსიკოგრაფიულად (ანბანის მიხედვით) უფრო მცირეა,
        # სამიზნე უნდა იყოს მარჯვენა ნახევარში.
        elif current_country < target_country:
            left = mid + 1
            
        # 3. თუ შუა ქვეყანა ლექსიკოგრაფიულად უფრო დიდია,
        # სამიზნე უნდა იყოს მარცხენა ნახევარში.
        else: # current_country > target_country
            right = mid - 1
            
    # თუ ციკლი დასრულდა და ქვეყანა ვერ მოიძებნა
    return -1

# --- გამოყენების მაგალითი ---

# ლექსიკოგრაფიულად დალაგებული ქვეყნების მასივი
country_list = [
    "ავღანეთი", "ალბანეთი", "ბელგია", "გერმანია", "ესპანეთი", 
    "თურქეთი", "იაპონია", "კანადა", "საქართველო", "უკრაინა", 
    "ფინეთი", "შვედეთი", "ჩილე"
]

target_1 = "საქართველო"
target_2 = "საფრანგეთი"

index_1 = find_country(country_list, target_1)
index_2 = find_country(country_list, target_2)

print(f"ეძებთ: '{target_1}'")
if index_1 != -1:
    print(f"'{target_1}' მოიძებნა ინდექსზე: {index_1} (O(log n))")
else:
    print(f"'{target_1}' ვერ მოიძებნა.")

print("-" * 30)

print(f"ეძებთ: '{target_2}'")
if index_2 != -1:
    print(f"'{target_2}' მოიძებნა ინდექსზე: {index_2} (O(log n))")
else:
    print(f"'{target_2}' ვერ მოიძებნა.")