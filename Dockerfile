# docker build -t gganbu-front .
# docker run --name gganbu-front -it -p 3000:3000 <image_id>

FROM node

# 앱 디렉터리 생성
WORKDIR /app

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./
RUN npm config set legacy-peer-deps true
RUN npm install
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production

# 앱 소스 추가
COPY . .

EXPOSE 3000


CMD [ "npm", "start" ]