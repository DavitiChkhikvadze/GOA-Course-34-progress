def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    left = []
    right = []

    for num in arr:
        if num < pivot:
            left.append(num)
        elif num > pivot:
            right.append(num)

    return quick_sort(left) + [pivot] + quick_sort(right)

random_shi = [4,2,7,1,3,9,6]
print(quick_sort(random_shi))