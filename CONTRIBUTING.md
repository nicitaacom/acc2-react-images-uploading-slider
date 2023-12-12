## How to strat contributing to this project

### Fork repository

![fork repository](https://i.imgur.com/pjBCqGC.png)

## Clone forked repository

![clone forked repository](https://i.imgur.com/2IsIuv0.png)

## Create branch name e.g

`feat/something_onSomethingClick`
`fix/something_onSomethingClick`

## Keep in mind that I reject your PR if you will do all changes in 1 commit

That's why do commits as small as possible for this check [this video](https://www.youtube.com/watch?v=Dy5t_H2PRrk&ab_channel=EricMurphy)

## Create PR

If you done with your changes - jsut go ahead and crete PR

![create PR](https://i.imgur.com/vqDYeJ8.png)

<br/>

---

<br/>

## Pull requests

### Pull requests naming

[PR#59]-imp-close_avatar_dropdown_on_item_click
In case task related to this PR done you - in [] you write PR and number of this PR

[PR#59-UPD]-imp-close_avatar_dropdown_on_item_click
In case task not done every day when you finish coding you do this PR - in [] you write PR and number of this PR and -UPD

### Pull requests description

**Use descripion template below**

Please don't write in `1. Change title` `2. Chnage title` etc `chore` / `style`<br/>
Write `fix` / `feat` / `docs` instead

```md
# Changes

### 1. Change

which problem was solved
video/screenshot (preffered)

<br/>

---

<br/>

# Result (n days)

video/screenshot

<br/>

---

<br/>

**Issue** -
This task done - delete this branch and move task to 'Done'
This task not done and created to keep 'development' branch up to date - don't delete this branch
```

<br/>

---

<br/>

### Commit naming

style: mb-8 instead of pb-8
chore: AvatarDropdown.tsx incapsulated
chore: ModalContainer renamed to ModalQueryContainer
upd: store for avatarDropdown created
feat: close avatarDropdown on DropdownItem click
docs: commit naming add

1. chore - for update that doesn't affect on user
2. style - only styling changes
3. upd - some minor changes that leads to feat
4. feat - for some ready feature
5. docs - for docs changes

## Write your own docs

Wirte docs in style
`What problem if solves`
Your docs how to use something

For example:
This file needed to format price from `199999.99` to this `$1,999,99.99`
or
I use this component to show how much products will be shown per page
I added this component because some users may be annoyed with clicking '>' button
