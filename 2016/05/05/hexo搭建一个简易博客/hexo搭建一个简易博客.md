---
title: 零基础hexo+github搭建主题为yilia博客
date: 2016-05-05 21:43:52
tags:
 - 生活
---



#前言
 之前在博客园跟CDNS都注册了博客，后面觉得自己搭一个才属于自己，跟着各种大神博客教程折腾，中途遇到了很多意料之外的问题，寻找方案，也还算是搭出个样子了。以后接触更多再修改吧！跨出第一步很容易，可是坚持下来就比较难了！下面就介绍我的搭建过程吧，不好的地方多多指教。`^_^`
######我是分界线
---

#主要步骤
      * git环境
      * 安装Nodejs
      * 用github page建一个库
      * 安装hexo
      * 配置主题
     
     


下面就分别来讲讲这几个步骤：

##git环境
了解[git](http://baike.baidu.com/subview/1531489/12032478.htm)，然后下载一个git安装到电脑上.打开安装完以后，我们需要检测是否安装完成，打开dos界面（传说中的黑框框），`WIN+R`输入`cmd`，敲上命令，出现版本号就成功了。
   
     git --version
#######我是分界线
-------
##安装Nodejs
先简单了解下[Nodejs](http://baike.baidu.com/link?url=7ZBP5WeFD45hLlX_86aNr3-hn8096X5uBkYgzSwo3iJIDNPZKix-ID7mnMRqUFSejp5HDoJHf-v_oMGVP0UcPY7BYt_4k8y2jtdF7ptRO4C8NJPOmKStdhiUykBVcdQPMyPGbNSGLKhAih0E4tqex_)吧。然后就到官网去下载一个[Nodejs](https://nodejs.org/en/),一般下载`v4.4.4LTS`,打开安装完以后，我们需要检测是否安装完成，上命令

    node -v
    npm -v

看到如下界面就OK了：
![](http://7xtsii.com1.z0.glb.clouddn.com/a5.png)


######我是分界线
----

##用github page建一个库
首先得有一个github账号，没有就去注册一个吧，据我了解，这是程序员必备品。

1、在自己的github页面中找到它，建一个库

 ![](http://7xtsii.com1.z0.glb.clouddn.com/a1.png)

2、取一个名字 格式如下:在`Repository name`下填写`yourname.github.io`，然后OK
  
###注意:
    
    yourname要和你github的名字一致,比如我的github上的名字是Lynn081，然后再瞟一眼我的博客,机智如你。

3、点击界面右侧的`Settings`，向下拖动，直到看见`GitHub Pages`,点击`Automatic page generator`，Github将会自动替你创建出一个`gh-pages`的页面。
15分钟后你就可以访问你的博客了~~~

 ![](http://7xtsii.com1.z0.glb.clouddn.com/a3.png)

######我是分界线
---
  
#配置hexo
1、建一个文件夹，给hexo安一个家，然后在里面打开git bash界面，输入如下命令：
   
    * npm install hexo-cli -g
    * npm install hexo --save

2、接下来我们检测一下是否安装好了，继续输入：

    hexo -v
当看到如下界面，congratulation! `^_^`

![](http://7xtsii.com1.z0.glb.clouddn.com/a4.png)

3、初始化hexo

    hexo init
4、接下来要安装npm,至于什么是npm，点这里了解[npm](http://baike.baidu.com/link?url=g4NVNdKM3ma-kq7Z_4oaZNxNSV7YmhvBHqKbWy3BxClAcz6WJE4oplvPtYDxom0o-_HYCEBuBhbXQbD094aK3_)，继续命令行
   
    npm install

    如果命令无法运行，可以尝试更换taobao的npm源
    npm install -g cnpm --registry=https://registry.npm.taobao.org


5、这些都配置好后，就可以体验hexo了，输入命令

    hexo -g ------>相当于hexo generate：部署网页
    hexo -s ------>相当于hexo server：打开服务器

进入网址`http://localhost:4000/`就可以看到你的博客面目了！



#######分界线空降
----
----

#配置yilia主题
是不是觉得这个主题不是很满意，但是lynn目前还不会这些前端知识，所以就偷懒clone别人的吧！后面修改一些小东西就好了。

1、clone主题，这里Lynn选择的是yilia毕竟比较简洁，进入到文件夹`hexo`，然后打开`git bash`输入命令：

    git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia

2、在hexo的`_config.yml`中修改 

     themes:yilia

根据自己喜好做这些修改：

![](http://7xtsii.com1.z0.glb.clouddn.com/a6.png)

添加一些自己想要的标签：

![](http://7xtsii.com1.z0.glb.clouddn.com/a7.png)

设置你的头像，两种方法：

1、直接贴上照片的url
2、把照片存到yilia中的`img`文件夹中,然后照着lynn的格式，注意冒号后要空一个字符

![](http://7xtsii.com1.z0.glb.clouddn.com/a9.png)


3、开始配置属于自己的yilia主题
   
进入`hexo\themes\yilia`,打开`_config,yml`信息根据自己的情况做修改

![](http://7xtsii.com1.z0.glb.clouddn.com/a8.png)

4、更新主题

进入`hexo/themes/yilia`,右键打开`Git Bush`,执行 `git pull`:

到这里博客就算是搭好了， 退到hexo文件夹里面，输入命令`hexo g`跟`hexo s`
，可以到本地看样式，然后上传到github上去。


##关于把博客上传到github
  1、在本地建一个文件夹如blog，用github把之前建的库clone下来

  2、将hexo文件夹中的`public`所有文件复制到文件夹blog，然后把blog上传到github




