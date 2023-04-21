# テーブル設計

## usersテーブル

| Column             | Type   | Option                    |
| ---------------    | ------ | ------------------------- |
| nickname           | string | null: false               |
| email              | string | unique: true, null: false |
| encrypted_password | string | null: false,  default: "" |

### Assosiation
- has_many :lists

## listsテーブル

| Column | Type       | Option                         |
| -------| ---------- | ------------------------------ |
| title  | string     | null: false                    |
| poster | string     | null: false                    |
| date   | string     | null: false                    |
| text   | string     | null: false                    |
| user   | references | null: false, foreign_key: true |

### Assosiation
- belongs_to :user
