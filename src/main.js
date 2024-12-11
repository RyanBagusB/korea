import './style.css'

const heroDescriptionElement = document.querySelector('.hero-description');
const hamburgerButton = document.querySelector('.hamburgerButton');
const language = hamburgerButton.querySelector('span');
const boxes = document.querySelectorAll('.box');

const sojinDescriptionElement = document.querySelector('.profile-sojin .description');

const bobProfile = document.querySelector('.profile-bob');
const jeffiProfile = document.querySelector('.profile-jeffi');
const gesyaProfile = document.querySelector('.profile-gesya');
const sojinProfile = document.querySelector('.profile-sojin');
const emptyProfile = document.querySelector('.profile-empty');
const profiles = [ sojinProfile, emptyProfile, gesyaProfile, bobProfile, emptyProfile, jeffiProfile ];

let lastActiveProfile = emptyProfile;

const heroInKoreaLanguage = () => `
  <p>
    본 프로젝트 잡종희망은 샤머니즘과 기술의 관계를 탐구한다. 아시아 각지에서 모인 창작자 집단이 함께 배우고 교류하는 자리로, 폭넓은 논의를 통해 현지 조사, 인터뷰, 워크숍 등 과정 중심의 예술을 실천한다. 이를 통해 동남아시아와 동아시아의 다양한 문화권에서 상실되어가는 공동체성과, 역사적 비극에서 비롯된 단절된 기억을 들여다보는 것을 목표로 한다. 이 웹사이트는 대화의 과정을 공유하며, 더 많은 모임을 위한 초석을 마련한다.
  </p>
  <p>2024년 참여자: 고결, 게사다 시레가르, 곽소진, 박유진, 밥 에드리안, 제피 만자니</p>
  <p>이 프로젝트는 한국국제교류문화진흥원의 2024 한-아세안 문화혁신 공동협력 프로젝트의 지원을 받았습니다. </p>
`;

const heroInEnglishLanguage = () => `
  <p>
    The project Hybrid Hope explores the relationship between shamanism and technology. It serves as a space where a collective of creators from various parts of Asia come together to learn and exchange ideas. Through extensive discussions, the project practices process-oriented art, including field research, interviews, and workshops. The aim is to reflect on the fading sense of community and the fragmented memories stemming from historical tragedies in the diverse cultural spheres of Southeast and East Asia. This website shares the dialogue process and lays the foundation for further gatherings.
  </p>
  <div>
    <p>2024 Participants:</p>
    <p>Bob Edrian, Eugene Hannah Park, Gesyada Siregar, Gyeol Ko, Jeffi Manzani, Sojin Kwak</p>
  </div>
  <p>
    This website is supported by the 2024 Asean-Korea Partnership Project for Innovative
  </p>
  <p>Culture by KOFICE</p>
`;

const sojinDescriptionInEnglishLanguage = () => `
  <div>
    <p>
      “Utopian feelings can be disappointed and generally are. Nonetheless, this disappointment is indispensable in the act of transforming images. What emerges in silence is a powerful picture closer to a child or a beautiful animal. (...) How does pleasurable time manifest itself? It comes with cries, groans. What matters in concrete utopia is the astonishing moment of contemplation that reflects on the past, present, and future.”
    </p>
    <p>— José Esteban Muñoz, Cruising Utopia</p>
  </div>

  <div>
    <p>1</p>
    <p>
      Ernst Bloch explained the failure of hope as the ontological basis by which hope is defined. “Hope can be disappointed, will be disappointed, and indeed must be. Otherwise, it is not hope.” According to Bloch, the possibility that hope may fail or be disappointed is not a negation of hope but a condition of possibility.
    </p>
    <p>
      When the extreme failures and dangers of the present (“normalcy,” “heteronormativity,” “capitalism”) threaten us, our gaze inevitably turns toward the imagined future. Hope includes the wounded awareness that this moment, this place, this pain-filled experience is not all there is—that something essential is being missed and that the present is shattering our experience into fragments.
    </p>
  </div>

  <div>
    <p>2</p>
    <p>
      Many modern smartphones and cameras feature OIS (Optical Image Stabilization) technology, which collects up to 6,600 vibration data points per second. Before an image is captured, OIS detects vibrations and moves the lens and sensor in the opposite direction to compensate for the shaking. Unlike DIS(Digital Image Stabilization), which corrects images through post-processing software, OIS ensures high-quality, sharp images without losing pixel resolution. This is why major camera manufacturers like Samsung, Apple, Sony, and Canon equip their lenses with OIS technology.
    </p>
    <p>
      Meanwhile, Apple's FAQ section addresses camera malfunctions. In response to users reporting that their camera screen vibrates uncontrollably when activated, Apple explains: “Frequent exposure to high-amplitude vibrations can damage your phone's OIS and image stabilization features.” Users experiencing this problem are often motorcycle riders, construction workers, or people regularly exposed to specific frequencies. In Apple’s terms, they are simply people who are frequently, intensely, and severely shaken.
    </p>
    <p>
      Watching the psychedelic, trembling landscapes recorded by my sibling’s broken phone camera—damaged for the same reason—prompted me to reflect on the notion of trembling.
    </p>
  </div>

  <div>
    <p>3</p>
    <p>
      The trembling of a clenched fist, the wavering chopsticks of an elderly person losing muscle control, the wailing of an engine exceeding its speed limit, sudden convulsions, or the trembling legs of a weightlifter lifting beyond their capacity—all evoke pathos. These images are moving because they foreshadow what is coming next. Trembling emerges from uncertainty, and within the conditions of the present, uncertainty is a premonition of failure.
    </p>
    <p>
      In my new video work focused on trembling, I aim to capture the sensations of trembling, vibration, and convulsion as a unique state of tension between functioning and malfunctioning. I will connect the imagination of the future with the phenomenon of ecstasy, a gift only uncertain things can offer. Though trembling may seem pitiful within the confines of the present, uncertainty in the context of the future becomes a premonition of ecstasy. If something keeps trembling here and now, it is not out of fear of an anticipated failure but out of a desperate hope for the reversal where what is functioning breaks down, and what is broken begins to move. What comes beyond the trembling horizon? What follows the precarious trembling that barely sustains one another? The camera’s broken image-stabilization sensor transforms every landscape it records into an uncertain image.
    </p>
  </div>
`;

const sojinDescriptionInKoreaLanguage = () => `
  <div>
    <p>
    꽉 쥔 손의 떨림, 근육을 잃어버리고 있는 노인의 젓가락질, 한계 속도를 초과한 엔진의 울부짖음, 갑작스런 발작, 자신이 감당할 수 있는 중량을 초과한 바벨을 들어올린 역도선수의 다리는 애처롭다. 이 이미지들이 애처로운 이유는 그 다음을 예감하도록 하기 때문이다. 흔들림은 불확실성 속에서 발생하며, 현재라는 조건 안에서 불확실성은 곧 실패에 대한 예감이다. 
    </p>
    <p>— José Esteban Muñoz, Cruising Utopia</p>
  </div>
  <div>
    <p>1</p>
    <p>
      블로흐는 희망의 실패를 희망이 정의되는 존재론적 근거로 설명했다. "희망도 실망할 수 있고, 실망할 것이며, 실제로 그렇게 되어야만 한다. 그렇지 않으면 희망이 아니다." 블로흐에 따르면 희망이 실망하고 실패할 수 있다는 것은 희망의 부정이 아니라 가능성의 조건이다. 현재('정상', '이성애', '자본주의')의 극심한 실패와 위험이 우리를 위협할 때, 우리가 눈을 돌리는 곳은 미래에 대한 상상이다. 
    </p>
    <p>
      희망은 지금 이 순간, 이 장소, 고통으로 가득한 이 순간이 전부가 아니고 우리는 지금 무언가를 놓치고 있으며, 현재가 우리의 경험을 산산조각 내고 있다는 것을 깨닫는 상처입은 인식의 순간을 포함하는 것이다. 
    </p>
  </div>

  <div>
    <p>2</p>
    <p>
      현재 많은 스마트폰과 카메라에 적용되는 OIS(광학식 손떨림 보정 기술Optical image stablization) 는 1초에 최대 6600번의 흔들림 데이터를 수집하는 것으로 이미지가 캡쳐되기 전 떨림을 미리 감지하여 그 반대방향으로 렌즈와 센서를 움직여 손떨림을 보정한다. 소프트웨어에서 이미지를 후보정하는 DIS 기술과는 달리 OIS 기술은 이미지 화소의 유실 없이 고화질의 선명한 이미지를 기록할 수 있도록 하기 때문에 삼성, 애플, 소니, 캐논 등 동시대의 카메라 제조 업체들이 생산하는 렌즈들은 모두 OIS 기능을 탑재하고 있다. 
    </p>
    <p>
      한편, 아이폰의 자주 묻는 질문란에는 카메라 고장과 관련한 내용이 정리되어 있다. 카메라를 결 때마다 모니터 화면이 발작적으로 진동한다는 유저들의 질문에 애플은 “고진폭의 떨림에 핸드폰을 자주 노출시키는 것은 OIS와 이미지 안정화 기술을 망가뜨릴 수 있습니다.”라고 답변했다. 이 현상을 겪는 유저들은 오토바이 라이더이거나, 공사현장에서 일하는 사람들이거나, 특정 주파수에 주기적으로 노출되는 사람들이다. 이들은 애플이 묘사했듯 간단히 말해 고진폭으로, 자주, 심하게 떨리는 사람들이다. 
    </p>
    <p>
      같은 이유로 망가진 내 동생의 핸드폰 카메라가 기록한 사이키델릭하게 흔들리는 풍경을 바라보는 것은 내게 흔들림에 대한 생각을 시작하도록 했다. 
    </p>
  </div>

  <div>
    <p>3</p>
    <p>
      꽉 쥔 손의 떨림, 근육을 잃어버리고 있는 노인의 젓가락질, 한계 속도를 초과한 엔진의 울부짖음, 갑작스런 발작, 자신이 감당할 수 있는 중량을 초과한 바벨을 들어올린 역도선수의 다리는 애처롭다. 이 이미지들이 애처로운 이유는 그 다음을 예감하도록 하기 때문이다. 흔들림은 불확실성 속에서 발생하며, 현재라는 조건 안에서 불확실성은 곧 실패에 대한 예감이다. 아니라, 기능하던 것이 망가지고 망가진 것이 움직이는 역전의 순간을 간절히 희망하기 때문이다. 
    </p>
    <p>
      나는 흔들림을 주제로 하는 비디오 신작에서 떨림, 진동, 발작의 감각을 붙잡고, 이를 기능하는 것과 기능하지 못하는 것 사이의 특별한 긴장 상태로 바라보고자 한다. 그리고 미래에 대한 상상을 황홀경(엑스터시)이라는 현상으로 이어 받을 것인데, 황홀경은 오직 불확실한 것들만이 우리에게 줄 수 있는 선물이기 때문이다. 현재라는 조건 안에서 흔들리는 것은 애처롭지만, 미래라는 조건 안에서 불확실성은 곧 황홀경에 대한 예감이다. 그러므로 지금 여기에서 무언가가 계속해서 떨리고 있다면 그것은 예견된 실패를 두려워하기 때문이 아니라, 기능하던 것이 망가지고 망가진 것이 움직이는 역전의 순간을 간절히 희망하기 때문이다.
    </p>
    <p>
      흔들리는 지평선 너머에는 무엇이 오는가? 서로를 간신히 지탱하는 위태로운 떨림 다음에 오는 것은? 카메라의 망가진 손떨림 방지센서는 그것이 기록하는 모든 풍경을 불확실한 이미지로 변환시킨다. 
    </p>
  </div>
`;

heroDescriptionElement.innerHTML = heroInEnglishLanguage();
sojinDescriptionElement.innerHTML = sojinDescriptionInEnglishLanguage();

hamburgerButton.addEventListener('click', () => {
  if (language.innerText === 'EN') {
    language.innerText = 'KR';
    heroDescriptionElement.innerHTML = heroInEnglishLanguage();
    sojinDescriptionElement.innerHTML = sojinDescriptionInEnglishLanguage();
  } else if (language.innerText === 'KR') {
    language.innerText = 'EN';
    heroDescriptionElement.innerHTML = heroInKoreaLanguage();
    sojinDescriptionElement.innerHTML = sojinDescriptionInKoreaLanguage();
  }
});

boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    lastActiveProfile.style.display = 'none';

    profiles[index].style.display = 'flex';
    lastActiveProfile = profiles[index];
  });
});
