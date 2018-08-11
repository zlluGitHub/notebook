

#<p align="center"><font color="#0000dd">git和github的基本知识</font></p>

---


- ### github的基本安装 

    - #### linux下安装git
   
      直接使用命令：`sudo apt-get install git`
        
    - #### mac下安装git 
     
      直接使用命令: `brew install git`
     
    - #### windows下安装git 
  
      百度 gitbash ，下载安装即可。

    - #### git的基本配置
   
          git config --global user.name "zlluGitHub"
          git config --global user.email "18230086651@qq.com"
  
- ### 查看配置信息  
  
      git config --list

- ### 工作流程

     + 克隆 Git 仓库作为工作目录（或者自己新建一个工作目录并初始化为Git仓库）。命令：
        
            git clone [仓库地址]
         
     - 增加资源及修改文件。

     - 提交修改。   

     - 如果他人修改了代码，可以更新资源。

- ### github基本命令

    * #### git init

        通过创建 demo 文件夹，`git init` 初始化，新建一个仓库。
 
            mkdir demo && cd demo
            git init

    - #### git clone   


      如果在 github 上已经有了仓库，可以直接通过 git clone 将项目 clone 到本地。
       
            git clone [仓库地址]

    - #### git diff        

        查看做了哪些修改。可按 q 退出。

            git diff

    + #### git add 

         `git add`可以将文件添加到缓存去，获得 Git 的跟踪。也可以通过加参数，将所有的文件添加到缓存区。
   
            
            git add .   　　　//添加所有文件

            touch a.html     //新建　a.html 文件

            git add a.html　　//添加　a.html 文件

            //下面的三种方式效果相同

            git add .

            git add -A

            git add *

    + #### git status  

        `git status` 可以查看当前版本库各个文件的状态。

    + #### git commit 

       `git commit` 将缓存区内容添加到仓库中

    + #### git commit -m 

       `git commit -m '尽量写的语义话'` 版本留言，尽量写的语义话'

    + #### git log 

       `git log`  查看提交记录。

    + #### git reset 

        `git reset` 取消已经缓存的内容。
     `git reset --hard HEAD`　或 　`git reset --hard [版本号]`通过版本号回滚

    + #### git rm 

       `git rm` 命令把一个文件删除，并把它从git的仓库管理系统中移除。 `git rm readme.md`

    + #### git checkout 

      `git checkout` 取消对某个文件的修改，通过 `git status` 查看状态，然后执行 `git checkout` `git checkout 文件名`

    + #### git status 

- ### 使用git推送代码

    1. 首先，要在 github 上新建仓库，然后 clone 下来,执行命令：
       
            git clone 仓库地址
    
    2. 首次推送，如果没有 clone 现有仓库，而是直接在本地 git init 的仓库的话，需要先添加远程仓库地址。*之后可以省略参数　`git push`*

            git push -u origin master 

    3. 为这个仓库添加一个远程地址

            git remote add origin [你的github上的仓库地址]

    4. 由于每次 push 都需要输入用户名和密码，很麻烦。这里需要设置下 ssh 

        * #### 设置 `public key`

        - 首先需要在本地机器上生成 key。`ssh-keygen` 这时，会在 `~/.ssh/ `文件夹之下生成一对 `ssh key` ，包括一个 `public key` 和一个 `private key` 。（如果是windows用户，这个文件一般会在这里：`C:\Users\Administrator.ssh）`

        +  复制 `public key`   查看内容 `cat  ~/.ssh/id_rsa.pub`
  
        +  将拷贝的 public key 添加在github账户上：
        
                右上角点击头像-> 点击settings-> 点击SSH KEYS-> 

                点击ADD SSH KEYS-> 将获取的public key粘贴于此
      
* ### 分支操作

    - #### 创建分支

         `git branch [yourbranch]`

    - #### 切换分支 

        `git checkout [yourbranch]` 或者直接创建一个分支，并且切换过去 `git checkout -b [yourbranch]`

    - #### 删除分支 
    
        `git branch -d [yourbranch]`

    - #### 推送分支 
    
        `git push origin [yourbranch]`

* ### 分支更新及合并

    + #### 拉取更新
    
        拉取主分支上的更新 `git pull origin master`

    + #### 合并分支
    
        合并其他分支代码 `git merge [otherbranch]`