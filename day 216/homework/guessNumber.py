import random

def guess_the_number_game(min_num=1, max_num=100):
    # 1. კომპიუტერი ირჩევს რენდომ რიცხვს მოცემულ დიაპაზონში
    secret_number = random.randint(min_num, max_num)
    guess = None
    guess_count = 0

    print("-" * 50)
    print(f"კომპიუტერმა ჩაიფიქრა რიცხვი {min_num}-დან {max_num}-მდე.")
    print("თქვენი მიზანია იპოვოთ ის რაც შეიძლება სწრაფად!")
    print("-" * 50)

    # თამაშის ციკლი
    while guess != secret_number:
        try:
            # მომხმარებლის რიცხვის შეტანა
            user_input = input("შეიყვანეთ თქვენი ვარაუდი: ")
            guess = int(user_input)
            guess_count += 1

            # უკუკავშირის მიცემა
            if guess < secret_number:
                print(">> დაბალია! ჩაფიქრებული რიცხვი უფრო მაღალია.")
            elif guess > secret_number:
                print(">> მაღალია! ჩაფიქრებული რიცხვი უფრო დაბალია.")

        except ValueError:
            print("გთხოვთ, შეიყვანოთ სწორი რიცხვი.")
            continue # ვაგრძელებთ ციკლს

    # თამაშის დასასრული
    print("-" * 50)
    print(f"გილოცავთ! თქვენ გამოიცანით რიცხვი {secret_number}!")
    print(f"დაგჭირდათ სულ {guess_count} მცდელობა.")
    print("-" * 50)

# თამაშის დაწყება
guess_the_number_game(1, 100)