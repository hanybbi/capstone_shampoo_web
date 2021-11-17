# sample data
data = [['name', 'brand', 0, 0, 2, 2, 0],
        ['TS GD', 'TS', 0, 0, 1, 2, 0],
        ['name2', 'brand1', 0, 0, 0, 2, 1],
        ['name3', 'brand1', 0, 0, 2, 1, 0],
        ['name4', 'brand2', 0, 0, 2, 0, 0],
        ['name5', 'brand2', 0, 0, 2, 0, 1],
        ['name6', 'brand3', 0, 0, 2, 1, 1],
        ['name7', 'brand3', 0, 0, 1, 0, 0],
        ['name8', 'brand3', 0, 0, 2, 1, 0]]

# type, structure, moisture, tal_mo
user_data_sample0 = [0, 1, 1, 1]
user_data_sample1 = [0, 2, 1, 1]
user_data_sample3 = [0, 2, 1, 0]


def resultShampoo(user):
    result = []
    for shampoo in data:
        if shampoo[3:] == user:
            result.append(shampoo[0:2])

    return result


print("User type: [0 1 1 1]\n", resultShampoo(user_data_sample0))
print("User type: [0 2 1 1]\n", resultShampoo(user_data_sample1))
print("User type: [0 2 1 0]\n", resultShampoo(user_data_sample3))
