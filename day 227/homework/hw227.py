def flatten_3d(array3d):
    flat = []
    for layer in array3d:
        for row in layer:
            for item in row:
                flat.append(item)
    return flat

def find_in_3d(array3d, target):
    for z in range(len(array3d)):
        for y in range(len(array3d[z])):
            for x in range(len(array3d[z][y])):
                if array3d[z][y][x] == target:
                    return (x, y, z)
    return None

def rotate_matrix(matrix, directions):
    def rotate_right(m):
        n = len(m)
        new_m = [[0]*n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                new_m[j][n-1-i] = m[i][j]
        return new_m

    def rotate_left(m):
        n = len(m)
        new_m = [[0]*n for _ in range(n)]
        for i in range(n):
            for j in range(n):
                new_m[n-1-j][i] = m[i][j]
        return new_m

    for d in directions:
        if d == 1:
            matrix = rotate_right(matrix)
        elif d == -1:
            matrix = rotate_left(matrix)

    return matrix
