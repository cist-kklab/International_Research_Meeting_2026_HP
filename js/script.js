const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("page-content");

const contents = {
  overview: `
    <h2 class="section-title">Overview</h2>
    <div class="tab-body level-1">
      <p class="program-item level-1"> We are pleased to announce an international research meeting held as part
        of a project supported by the Grants-in-Aid for Scientific Research (KAKENHI) program.
      </p>
      <div class="info-block level-1" style="line-height: 2.0; margin-top: 20px;">
        <p><strong>Dates:</strong> January 24 (Sat) – 25 (Sun), 2026</p>
        <p><strong>Venue:</strong> Chitose Civic Cultural Center [2F Muti-Purpose Room] , Chitose, Hokkaido, Japan</p>
        <p>
          <strong>Access:</strong>
          <a href="https://www.chitose-bunka.jp/access/" target="_blank">https://www.chitose-bunka.jp/access/</a>
        </p>
        <p><strong>Theme:</strong> Building Learning Support Platforms Utilizing Advanced Technologies such as AI and XR</p>
        <p><strong>Organizer / Project Representative (PI):</strong> Hiroshi Komatsugawa, Chitose Institute of Science and Technology (CIST)</p>
      </div>
      <p class="program-item level-1" style="margin-top: 20px;"> 
        This meeting will discuss and explore the design and implementation of next-generation learning support platforms that leverage cutting-edge technologies, including Artificial Intelligence (AI), Extended Reality (XR), and related fields. 
        Through presentations, discussions, and demonstrations, we will examine how these technologies can be integrated to enhance personalized, immersive, and data-driven learning experiences.
      </p>
    </div>
  `,

  objectives: `
    <h2 class="section-title">Objectives</h2>
    <div class="tab-body level-1">
      <p class="program-item" style="margin-bottom: 15px;">
          The primary objectives of this workshop are to:
      </p>
      <ul class="session-list" style="margin-left: 0;">
          <li>Share recent research progress on AI- and XR-based learning environments</li>
          <li>Foster interdisciplinary collaboration among researchers and practitioners</li>
          <li>Discuss challenges and opportunities for the large-scale deployment of intelligent learning systems</li>
      </ul>
    </div>
  `,

  participants: `
    <h2 class="section-title">Expected Participants</h2>
    <div class="tab-body level-1">
      <p class="program-item" style="margin-bottom: 10px;">
          We welcome a diverse range of participants, including:
      </p>
      <ul class="session-list" style="margin-left: 0;">
          <li>Members of the KAKENHI project and collaborating international researchers</li>
          <li>Educators interested in AI-based learning platforms</li>
          <li>
              Developers working in specialized fields:
              <span class="level-2">
                  Educational technology, Artificial Intelligence(AI), Human-Computer Interaction (HCI), XR systems, and Learning Analytics
              </span>
          </li>
      </ul>
    </div>
  `,

  schedule: `
    <h2 class="section-title">Tentative Program Schedule</h2>
    <div class="tab-body level-1">
      <p class="day-title">January 24 (Sat) — Chitose Civic Cultural Center</p>
      
      <p class="program-item level-1">13:00 Greeting: Hiroshi Komatsugawa (CIST)</p>
      
      <p class="program-item level-1">
        13:20 Guest Presentation : Mike Ka Pui SO (Hong Kong University of Science and Technology) and CHU Man Ying Amanda (The Education University of Hong Kong);<br>
        <span class="level-2">Enhancing Students' Academic Performance in Statistics Through an AI-Assisted Pedagogy</span>
      </p>

      <p class="program-item level-1">
        14:30 Kazuyoshi Suzuki (Yamanashi Univ.);<br>
        <span class="level-2">Introductory Level Data Science Education at the University of Yamanashi</span>
      </p>

      <p class="program-item level-1">
        14:50 Manabu Asai (Souka Univ.);<br>
        <span class="level-2">The Impact of Generative AI Usage on Critical Thinking Skills at Soka University</span>
      </p>

      <p class="program-item level-1">15:10 Hiroto Yamakawa (CIST)</p>
      <p class="program-item level-1">
        15:30 Syunichi Honda (CIST);<br>
        <span class="level-2">A report on the instructional practice in a statistics course incorporating CBT and AI-based feedback</span>
      </p>

      <p class="program-item level-1">16:00–18:00 Student Session</p>
      
      <ul class="session-list level-1" style="margin-left: 1.5em;">
          <li>
              Sora Watanabe (CIST);<br>
              <span class="level-2">Research on Automatic Generation of Data Access and Visualizations Using LLM Agents</span>
          </li>
          <li>
              Hina Yoshida (CIST);<br>
              <span class="level-2">Research on Generative AI Dialogue Systems in Mixed Reality</span>
          </li>
          <li>
              Goto Shunsuke (CIST);<br>
              <span class="level-2">Development of a BLS Self-Training Support System using MR and Sensor Devices</span>
          </li>
          <li>
              Shota Ando (CIST);<br>
              <span class="level-2">Research on Pain Detection for Japanese by multimodal AI using basic devices</span>
          </li>
          <li>
              Kana Sunahara (CIST);<br>
              <span class="level-2">Research on the Automation and Systematization of Learning Support with Generative AI</span>
          </li>
      </ul>

      <p class="program-item level-1">
        19:00–21:00 — Networking Reception (Chitose City; details TBA)
      </p>

      <p class="day-title" style="margin-top: 40px;">January 25 (Sun) — Chitose Civic Cultural Center</p>
      <p class="program-item level-1">09:00–12:00 — Presentation Session (English)</p>
      <p class="program-item level-1">13:30–17:00 — KAKENHI Coordination Meeting (Japanese)</p>
      <p class="program-item level-1" style="margin-top: 20px;">
        Note: Detailed session information, invited speakers, and registration instructions will be announced later.
      </p>
    </div>
  `,

  contact: `
    <h2 class="section-title">Contact</h2>
    <div class="tab-body level-1">
      <p>For inquiries regarding participation or submission, please contact:</p>
      <div class="contact-card" style="margin: 20px 0; padding: 15px; border-left: 4px solid #c27c2c; background: #f8fafc;">
          <table style="border-collapse: collapse; width: 100%;">
              <tr>
                  <td style="padding: 5px 10px 5px 0; font-weight: bold; width: 110px;">Organizer:</td>
                  <td>Hiroshi Komatsugawa</td>
              </tr>
              <tr>
                  <td style="padding: 5px 10px 5px 0; font-weight: bold;">Affiliation:</td>
                  <td>Chitose Institute of Science and Technology, Japan</td>
              </tr>
              <tr>
                  <td style="padding: 5px 10px 5px 0; font-weight: bold;">Email:</td>
                  <td><a href="mailto:hiroshi@photon.chitose.ac.jp">hiroshi@photon.chitose.ac.jp</a></td>
              </tr>
          </table>
        <p>We look forward to your participation and to fruitful discussions that will advance AI-driven learning technologies.</p>
      </div>
    </div>
  `
};

// 初期表示
content.innerHTML = contents.overview;

// タブ切り替え
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const key = tab.dataset.tab;
    content.innerHTML = contents[key];
    // 切り替え時に一番上へスクロール（任意）
    window.scrollTo(0, 0);
  });
});