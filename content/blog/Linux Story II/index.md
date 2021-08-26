---
title: Linux Story II
date: "2019-09-15"
description: "When ubuntu installation completed I booted my lapt....."
path: '/blog/Linux-Story-II/Linux-Story-II'
---

When ubuntu installation completed I booted my laptop and it starts working again and I enjoyed the moment. But after some days when i checked my harddrive and started creating a folder it shows some error again. The folder is not created and then I start deleting the existing folder but it shows an error again. Then I started searching "How to change read/write of a folder in a drive?" and executed many commands related to this like $chmod 777 ~/file path but this changed the property of folder but not the harddrive partition.

![commands](./error.png)

Then I again searched for so many commands and executed them all but nothing happened. So I decided to ask to my brother again and he suggested the same solution which I executed earlier. Then he decided to  check my laptop  from his place, so i added "Chrome Remote Desktop" in Google Chrome. Then he checked the problem but nothing happened, and then he started searching problem again and this time he came up with a problem and its solution. The problem arrived from the Windows OS . When I removed the Windows Os from the PC, the Harddrive is locked due to its security purposes and then we found the solution.

To fix the NTFS lock he executed one command many time to free all the partition. The command to fix ntfs lock is sudo ntfsfix  /dev/sda(1-4).