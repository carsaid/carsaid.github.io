# vulcat下载和安装

## 1/ vulcat运行环境-python3

vulcat基于**python3**，请先提前下载并安装，官网：[https://www.python.org/downloads/](https://www.python.org/downloads/)

经测试python3.6版本及以上都可以，其余版本暂未测试

python安装教程可以参考：[https://www.runoob.com/python3/python3-install.html](https://www.runoob.com/python3/python3-install.html)

## 2/ vulcat下载

* 可以在[https://github.com/CLincat/vulcat/releases](https://github.com/CLincat/vulcat/releases)下载vulcat的**压缩包**，进行解压后再使用

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/install/install_01.png" alt=""><figcaption></figcaption></figure>

* 也可以通过**Git**拉取vulcat

<pre class="language-git"><code class="lang-git"><strong>git clone https://github.com/CLincat/vulcat
</strong></code></pre>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/install/install_02.png" alt=""><figcaption></figcaption></figure>

## 3/ vulcat依赖安装

通过python的**pip**组件安装所需的python库

国内用户可以通过-i参数 指定国内镜像源，加快下载速度

```
# 以下是5种不同形式的安装命令, 根据你的python环境, 选择合适的命令

pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple
pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple
python -m pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple
python3 -m pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple
py -3 -m pip install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple
```

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/install/install_03.png" alt=""><figcaption></figcaption></figure>

## 4/ 运行vulcat

以上三个步骤完成以后，就可以尝试运行vulcat了

如果没有异常报错，说明运行正常

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/install/install_04.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/install/install_05.png" alt=""><figcaption></figcaption></figure>





