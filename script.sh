#!/bin/bash

dirName=".husky"
filePreCommit="pre-commit"
fileNode="pre-commit.js"
script="node ../server/pre-commit.js"
preCommitJs="../server/pre-commit.js"
PORT=50001
export DEPENDENCY_DATA=""
createPreCommit() {
    if [ ! -d "$dirName" ]; then
        mkdir "$dirName"
    fi

    cd "$dirName" || exit

    if [ ! -f "$filePreCommit" ]; then
        touch "$filePreCommit"
    fi

    echo "취약점 발견 시 전송받을 이메일을 입력하세요"
    read userEmail
    
    echo "$script $userEmail $dependencyData" > "$filePreCommit"
}

findDependency() {
    DEPENDENCY_DATA=1
}



cd ..
echo "패키지 관리 도구를 선택하세요:"
options=("npm" "yarn" "pnpm")

select package_manager in "${options[@]}"; do
    case $package_manager in
        "npm")
            echo "NPM을 선택했습니다."
            # 여기에 NPM 관련 작업 추가
            npm install --save-dev husky
            npx husky init
            break
            ;;
        "yarn")
            echo "Yarn을 선택했습니다."
            # 여기에 Yarn 관련 작업 추가
            yarn add --dev husky
            break
            ;;
        "pnpm")
            echo "Pnpm을 선택했습니다."
            # 여기에 Pnpm 관련 작업 추가
            pnpm add --save-dev husky
            pnpm exec husky init
            break
            ;;
        *)
            echo "올바르지 않은 선택입니다. 다시 선택하세요."
            ;;
    esac
done

findDependency
createPreCommit
cd ../server


if lsof -Pi :$PORT -sTCP:LISTEN -t  >/dev/null ; then
    exit 1
else
    echo "포트 50001로 nest 서버가 실행 됩니다."
    nohup nest start &
fi