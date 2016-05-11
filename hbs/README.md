#hbs Directory used to create templates using hbs 

###install
In order to use it must have handlebars installed with nodejs
```bash

    #to install
    npm -g  install handlebars

```
Go to directory outside of template
###Compile
```bash

    #compile template  exportOutTo importTemplateFrom
    handlebars -f .\tempaltes\project-template.js .\tempaltes\projects.handlebars
    
```

###Change 
change in line 14 with different template name : 'projects'
Open index.html and it will create a file with the html