깃관련 처리
=============
* 레포 폴더/파일 삭제 : git rm -rf '폴더 및 파일명' => git commit -m 'remove file' => 푸쉬
* 레포 폴더/파일명 변경 : git mv oldName newName => 커밋 => 푸쉬
* 깃 애드 잘못했을 때(커밋이 안될 때) : git reset --soft HEAD^ => git resotre --staged '파일명'
* 파일을 삭제할때는 git rm '파일명'으로 해야함! add로 하면 안된다.
* 파일 올릴 때, 개인공부면 week0-0-1 로 뒤에 -1을 붙여 구분할 것!
* 파일 이동시 오타로 인해 이상한 메모파일이 생성되었을 때, 그냥 기존 파일 명을 새로 생성하고 메모장은 지워라(되돌리기는 아직 확인 못했음)
* ! [rejected]        master -> master (fetch first) 라는 메시지가 뜰 경우 => git pull --rebase 원격저장소별칭 master
* git init 취소 : rm -r .git
* 깃 파일 삭제: 1.원격/로컬 동시 = git rm 'fileName', 2.원격만 = git rm --cached 'fileName' >> 커밋, 푸쉬
* 깃 폴더 삭제: 1.원격/로컬 동시 = git rm -rf 'folderName', 2.원격만 = git rm --cached 'folderName/'

* 깃 레포 새로 생성할때 
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/basilry/project-by-basilry.git
git push -u origin main