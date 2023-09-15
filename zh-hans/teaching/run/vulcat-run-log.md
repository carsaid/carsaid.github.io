# 日志

## --log

如果你想清楚地看到 每一个HTTP请求数据包，可以使用--log选项


## 日志1级

默认为1级，只显示基本输出信息
```
python3 vulcat.py -u <URL>
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/log_01.png" alt=""><figcaption></figcaption></figure>

## 日志2级

2级输出内容：每个HTTP请求的**框架名称+状态码+漏洞编号**
```
python3 vulcat.py -u <URL> --log 2
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/log_02.png" alt=""><figcaption></figcaption></figure>


## 日志3级

3级输出内容：每个HTTP请求的**2级日志内容+请求方法+请求URL+POST数据**（没有POST数据则不会显示）
```
python3 vulcat.py -u <URL> --log 3
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/log_03.png" alt=""><figcaption></figcaption></figure>


## 日志4级

4级输出内容：每个HTTP请求的**2级日志内容+请求数据包**
```
python3 vulcat.py -u <URL> --log 4
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/log_04.png" alt=""><figcaption></figcaption></figure>

## 日志5级

5级输出内容：每个HTTP请求的**2级日志内容+请求数据包+响应头**
```
python3 vulcat.py -u <URL> --log 5
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/log_05.png" alt=""><figcaption></figcaption></figure>

## 日志6级

6级输出内容：每个HTTP请求的**2级日志内容+请求数据包+响应头+响应内容**
```
python3 vulcat.py -u <URL> --log 6
```
<figure><img src="https://cdn.staticaly.com/gh/clincat/blog-imgs@main/hub/static/imgs/usage/log_06.png" alt=""><figcaption></figcaption></figure>
