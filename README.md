
#   Как запустить проект

Проверьте наличеие Node.js и npm на вашем компьютере

    node -v
Проверьте наличие np, если его нет, установите его

    npm -v
Установите все зависимости
    
    npm install
Для запуска проекта используйте команду

    npm start
После этого откройте [http://localhost:3005](http://localhost:3005) в браузере

Если у вас возникли проблемы с запуском проекта, проверьте наличие всех зависимостей, а также проверьте свободен ли порт 3005

     lsof -i :3005
Если порт занят, убейте процесс, который его занимает
    
    kill -9 <PID>

Если возникли иные проблемы свяжитесь со мной 
