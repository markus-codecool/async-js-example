from faker import Faker


def _generate_user(index):
    fake = Faker()
    Faker.seed(index)  # this is inefficient, but that's good because it delays the response significantly :)
    first_name = fake.first_name()
    last_name = fake.last_name()
    return {
        'id': index + 1,
        'lastname': last_name,
        'email': f"{first_name.lower()}.{last_name.lower()}@{fake.domain_name()}"
    }


def get_users(count: int = 20):
    users = []
    for i in range(count):
        users.append(_generate_user(i))
    return users
