(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{568:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("在使用"),a("code",[s._v("git")]),s._v("的时候，我们经常会进行提交"),a("code",[s._v("push")]),s._v("，但是如果发现当前分支新增的内容并不好，想要回退到上一次"),a("code",[s._v("commit")]),s._v("的内容，该如何操作呢？")]),s._v(" "),a("p",[s._v("现在先简单操作一下，创建一个原始测试文件。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("现在模拟正常开发，变更了"),a("code",[s._v("test")]),s._v("内容，并提交。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b"')]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("就在这个时候，突然发觉，新修改为 b，并不是想要的结果，上次的 a 倒是想要的，而且新的更改打算基于 a 来进行，因此就需要退回去了（这里忽略在当前分支更改的情况，因为有时候文件变更之多，已经不是在当前分支更改这么简单的事情了）。")]),s._v(" "),a("p",[s._v("首先查看一下两次提交的信息：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\ncommit bbdad59835b4ad0fabafcc938bdc97c31ec5fbcb "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master, origin/master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAuthor: eryajf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("liqilong@edspay.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Sat Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":55:15 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" +0800\n    b\ncommit ae547b02bc32927b2dfd9a05d0ced53c1838180c\nAuthor: eryajf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("liqilong@edspay.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Sat Jul "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":52:56 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v(" +0800\n    a\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("注意这个时候 test 文件里边的内容是 b，我现在想先将其回退到 "),a("code",[s._v("23:52:56")]),s._v("的提交，然后在那个基础上，更改文件内容，并作为最新的代码合并到主分支。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pretty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline\nbbdad59835b4ad0fabafcc938bdc97c31ec5fbcb b\nae547b02bc32927b2dfd9a05d0ced53c1838180c a\n065e6fbe1d58b66a20503a3178bacaaa2c740d97 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("origin/test, old-master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" new\nc78e5e4e36820d473aa4954d806d5cbb3eff4f0c "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n5a6ebddb9188233eccfc023eb18e28ff04f8723f "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n819665d73f393992e358c4acc3da4c4aa0eaaa7c fix\n16b82739181d97fa3c54c08f92566d7daecccbec "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("origin/dev, dev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n98ed573c557430eda03d78d25783b8798b9ab036 fei\n9d9b833cd05d733bd26b9236d0f6de4c4cf0d4b1 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nf8d74d07898dd57cb2c6ce3bbd7accffe75daa08 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("首先我们切换到"),a("code",[s._v("a")]),s._v("的那次"),a("code",[s._v("HEAD")]),s._v("中。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Administrator@liqilong MINGW64 ~/Desktop/pipeline/test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout ae547b02bc32927\nNote: checking out "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ae547b02bc32927'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nYou are "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'detached HEAD'")]),s._v(" state. You can "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("look")]),s._v(" around, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" experimental\nchanges and commit them, and you can discard any commits you "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" this\nstate without impacting any branches by performing another checkout.\nIf you want to create a new branch to retain commits you create, you may\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" so "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("now or later"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" by using "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" with the checkout "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" again. Example:\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("new-branch-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nHEAD is now at ae547b0 a\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("切过去之后，基于这个位置新建一个分支，然后做新的更改，更改之后，将新的分支的更改推送到远程仓库。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" atest\nSwitched to a new branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'atest'")]),s._v("\nAdministrator@liqilong MINGW64 ~/Desktop/pipeline/test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("atest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\na\nAdministrator@liqilong MINGW64 ~/Desktop/pipeline/test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("atest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nAdministrator@liqilong MINGW64 ~/Desktop/pipeline/test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("atest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nAdministrator@liqilong MINGW64 ~/Desktop/pipeline/test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("atest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("atest 102e070"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" c\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" deletion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAdministrator@liqilong MINGW64 ~/Desktop/pipeline/test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("atest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin atest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("现在已经将 atest 这个分支推送到了远程仓库，我们想把这个分支来作为最新的主分支，但是如果直接合并肯定会有冲突，也就是说现在的被合并分支，要比"),a("code",[s._v("master")]),s._v("分支更靠前，这一点，用工具来查看会更加直观。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/ed56bf793e74cbd8.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("从 Gitlab 的分支图也可以看到。")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://t.eryajf.net/imgs/2021/09/2a11790b9d40e2fa.jpg",alt:"img"}})]),s._v(" "),a("p",[s._v("这个时候，如果想直接把"),a("code",[s._v("atest")]),s._v("合并到"),a("code",[s._v("master")]),s._v("，显然不可行，因此可以有两种方案，基本上就是更易其主的思路。")]),s._v(" "),a("ul",[a("li",[s._v("要么把 master 删除，然后 atest 上位。")]),s._v(" "),a("li",[s._v("或者将 maser 重命名，再将 atest 重命名为 master。")])]),s._v(" "),a("p",[s._v("这里采用第二种方案操作一下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("Administrator@liqilong MINGW64 ~/Desktop/pipeline/test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("atest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" master old-master\nAdministrator@liqilong MINGW64 ~/Desktop/pipeline/test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("atest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" atest master\nAdministrator@liqilong MINGW64 ~/Desktop/pipeline/test "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("这样，就实现了基于之前一次 commit 的提交回退并二次开发提交的操作。也适用于有一些 master 分支年久失修的情况。")]),s._v(" "),a("p",[s._v("遇到的报错：")]),s._v(" "),a("ul",[a("li",[s._v("1，强制提交到 master 报错。")])]),s._v(" "),a("p",[s._v("报错内容如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" origin master\n  Total "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  remote: GitLab: You are not allowed to force push code to a protected branch on this project.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("是因为 master 是受保护分支，可以到 Gitlab 中对项目的 master 分支进行解除限制。")]),s._v(" "),a("ul",[a("li",[s._v("2，"),a("code",[s._v("you need to resolve your current index first")])])]),s._v(" "),a("p",[s._v("在切换分支的时候，总会提示这个信息：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("  $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n  error: you need to resolve your current index first\n  a: needs merge\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这个时候只需执行 "),a("code",[s._v("git reset --merge")]),s._v("即可解除。")])])}),[],!1,null,null,null);a.default=e.exports}}]);