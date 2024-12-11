import './style.css'

const heroDescriptionElement = document.querySelector('.hero-description');
const hamburgerButton = document.querySelector('.hamburgerButton');
const language = hamburgerButton.querySelector('span');
const boxes = document.querySelectorAll('.box');

const sojinDescriptionElement = document.querySelector('.profile-sojin .description');

const bobProfile = document.querySelector('.profile-bob');
const jeffiProfile = document.querySelector('.profile-jeffi');
const profiles = ['', '', '', bobProfile, '', jeffiProfile];

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

heroDescriptionElement.innerHTML = heroInEnglishLanguage();
sojinDescriptionElement.innerHTML = sojinDescriptionInEnglishLanguage();

hamburgerButton.addEventListener('click', () => {
  if (language.innerText === 'EN') {
    language.innerText = 'KR';
    heroDescriptionElement.innerHTML = heroInEnglishLanguage();
  } else if (language.innerText === 'KR') {
    language.innerText = 'EN';
    heroDescriptionElement.innerHTML = heroInKoreaLanguage();
  }
});

boxes.forEach((box, index) => {
  box.addEventListener('click', () => {
    profiles[index].style.display = 'flex';

    profiles.forEach((profil) => {
      profil.style.display = 'none';
    });
  });
});
