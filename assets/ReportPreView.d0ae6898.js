import{q as e,_ as D}from"./cis_r.071f3683.js";import{d as O,u as T,c as o,a as y,b as _,e as R,f as c,F as x,o as A,_ as m,g as h}from"./index.75dab299.js";import"./questionnaire.233332a9.js";const g=["innerHTML"],f={class:"container-sm"},q=O({__name:"ReportPreView",setup(N){const i=T(),w=[{question_id:"health-appetite-loss",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"health-appetite-gain",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"somatic-pain",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"somatic-discomfort",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"fatigue",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"fatigue-energy",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"concentration-forgetting",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"sleep-loss",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"sleep-gain",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"I have slept more than usual but this is not a problem",answer_type:e.AnswerType.RADIO},{value:3,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"irritability",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes, I have felt irritable or short tempered recently",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"irritability-trivial",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"hypochondria",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"hypochondria-serious",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"depression",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"depression-enjoy",answers:[{value:1,label:"Yes",answer_type:e.AnswerType.RADIO},{value:2,label:"No, less enjoyment than usual",answer_type:e.AnswerType.RADIO},{value:3,label:"No, I don't enjoy anything",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"depression-enjoy-recent",answers:[{value:1,label:"Yes",answer_type:e.AnswerType.RADIO},{value:2,label:"No, less enjoyment than usual",answer_type:e.AnswerType.RADIO},{value:3,label:"No, I don't enjoy anything",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"depression-duration",answers:[{value:1,label:"Less than 2 weeks",answer_type:e.AnswerType.RADIO},{value:2,label:"Between 2 weeks and 6 months",answer_type:e.AnswerType.RADIO},{value:3,label:"Between 6 months and 1 year",answer_type:e.AnswerType.RADIO},{value:4,label:"Between 1 and 2 years",answer_type:e.AnswerType.RADIO},{value:5,label:"Between 2 and 5 years",answer_type:e.AnswerType.RADIO},{value:6,label:"More than 5 years",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"depression-detail-hopeless",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes, I have felt hopeless sometimes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"worry",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Often",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"worry-any",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"anxiety-tense",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Often",answer_type:e.AnswerType.RADIO}],answer_index:1},{question_id:"anxiety-phobia",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:1},{question_id:"anxiety-phobia-only",answers:[{value:1,label:"These feelings were ALWAYS brought on by specific phobia",answer_type:e.AnswerType.RADIO},{value:2,label:"I sometimes felt generally anxious, nervous or tense",answer_type:e.AnswerType.RADIO}],answer_index:1},{question_id:"anxiety-frequency",answers:[{value:1,label:"None",answer_type:e.AnswerType.RADIO},{value:2,label:"Between one and three days",answer_type:e.AnswerType.RADIO},{value:3,label:"Four days or more",answer_type:e.AnswerType.RADIO}],answer_index:2},{question_id:"anxiety-duration",answers:[{value:1,label:"Less than 2 weeks",answer_type:e.AnswerType.RADIO},{value:2,label:"Between 2 weeks and 6 months",answer_type:e.AnswerType.RADIO},{value:3,label:"Between 6 months and 1 year",answer_type:e.AnswerType.RADIO},{value:4,label:"Between 1 and 2 years",answer_type:e.AnswerType.RADIO},{value:5,label:"Between 2 and 5 years",answer_type:e.AnswerType.RADIO},{value:6,label:"More than 5 years",answer_type:e.AnswerType.RADIO}],answer_index:4},{question_id:"phobia-frequency",answers:[{value:1,label:"None",answer_type:e.AnswerType.RADIO},{value:2,label:"Between one and three days",answer_type:e.AnswerType.RADIO},{value:3,label:"Four days or more",answer_type:e.AnswerType.RADIO}],answer_index:1},{question_id:"phobia-avoid",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes, on one or more occasion",answer_type:e.AnswerType.RADIO}],answer_index:1},{question_id:"phobia-avoid-frequency",answers:[{value:1,label:"None",answer_type:e.AnswerType.RADIO},{value:2,label:"Between one and three times",answer_type:e.AnswerType.RADIO},{value:3,label:"Four times or more",answer_type:e.AnswerType.RADIO}],answer_index:2},{question_id:"phobia-duration",answers:[{value:1,label:"Less than 2 weeks",answer_type:e.AnswerType.RADIO},{value:2,label:"Between 2 weeks and 6 months",answer_type:e.AnswerType.RADIO},{value:3,label:"Between 6 months and 1 year",answer_type:e.AnswerType.RADIO},{value:4,label:"Between 1 and 2 years",answer_type:e.AnswerType.RADIO},{value:5,label:"Between 2 and 5 years",answer_type:e.AnswerType.RADIO},{value:6,label:"More than 5 years",answer_type:e.AnswerType.RADIO}],answer_index:2},{question_id:"panic",answers:[{value:1,label:"No, my anxiety never got that bad",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes, sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Yes, often",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"compulsive",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Often",answer_type:e.AnswerType.RADIO}],answer_index:1},{question_id:"compulsive-frequency",answers:[{value:1,label:"None",answer_type:e.AnswerType.RADIO},{value:2,label:"Between one and three days",answer_type:e.AnswerType.RADIO},{value:3,label:"Four days or more",answer_type:e.AnswerType.RADIO}],answer_index:2},{question_id:"obsessive",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Often",answer_type:e.AnswerType.RADIO}],answer_index:1},{question_id:"obsessive-repeat",answers:[{value:1,label:"The same thoughts or ideas over and over again",answer_type:e.AnswerType.RADIO},{value:2,label:"Worrying about something in general",answer_type:e.AnswerType.RADIO}],answer_index:1},{question_id:"overall-follow-up",answers:[{value:1,label:"Not at all",answer_type:e.AnswerType.RADIO},{value:2,label:"They have made things more difficult but I get everything done",answer_type:e.AnswerType.RADIO},{value:3,label:"They have stopped one activity",answer_type:e.AnswerType.RADIO},{value:4,label:"They have stopped more than one activity",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"health-appetite-loss",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"health-appetite-gain",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"somatic-pain",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"somatic-discomfort",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"fatigue",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"fatigue-energy",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"concentration-forgetting",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"sleep-loss",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"sleep-gain",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"I have slept more than usual but this is not a problem",answer_type:e.AnswerType.RADIO},{value:3,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"irritability",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes, I have felt irritable or short tempered recently",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"irritability-trivial",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"hypochondria",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"hypochondria-serious",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"depression",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"depression-enjoy",answers:[{value:1,label:"Yes",answer_type:e.AnswerType.RADIO},{value:2,label:"No, less enjoyment than usual",answer_type:e.AnswerType.RADIO},{value:3,label:"No, I don't enjoy anything",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"worry",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Often",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"worry-any",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"anxiety-tense",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Often",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"phobia",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"compulsions",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Often",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"obsessions",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Often",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"health-appetite-loss",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"health-appetite-gain",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"somatic-pain",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"somatic-discomfort",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"fatigue",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"fatigue-energy",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"concentration-forgetting",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"sleep-loss",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"sleep-gain",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"I have slept more than usual but this is not a problem",answer_type:e.AnswerType.RADIO},{value:3,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"irritability",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes, I have felt irritable or short tempered recently",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"irritability-trivial",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"hypochondria",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"hypochondria-serious",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"depression",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"depression-enjoy",answers:[{value:1,label:"Yes",answer_type:e.AnswerType.RADIO},{value:2,label:"No, less enjoyment than usual",answer_type:e.AnswerType.RADIO},{value:3,label:"No, I don't enjoy anything",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"worry",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Often",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"worry-any",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"anxiety-tense",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Often",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"phobia",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Yes",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"compulsions",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Often",answer_type:e.AnswerType.RADIO}],answer_index:0},{question_id:"obsessions",answers:[{value:1,label:"No",answer_type:e.AnswerType.RADIO},{value:2,label:"Sometimes",answer_type:e.AnswerType.RADIO},{value:3,label:"Often",answer_type:e.AnswerType.RADIO}],answer_index:0}],u=w.map(a=>a.question_id),d=D.items.map(a=>(a.type===e.AnswerType.NUMBER&&(a.answers=new e.Answer({value:42,answer_type:e.AnswerType.NUMBER})),u.includes(a.id)&&(a.answer=a.answer_options[w.find(l=>l.question_id===a.id).answer_index]),a)),r=new Date,t=["No diagnosis identified","ICD10 Mixed anxiety & depressive disorder (mild)","ICD10 Generalised anxiety disorder - mild","ICD10 Obsessive-compulsive disorder","ICD10 Mixed anxiety and depressive disorder","ICD10 Specific (isolated) phobia","ICD10 Social phobia","ICD10 Agoraphobia","ICD10 Generalised anxiety disorder","ICD10 Panic disorder","ICD10 Mild depressive episode","ICD10 Moderate depressive episode","ICD10 Severe depressive episode"],b=["None","More difficult but everything gets done","One activity stopped","More than one activity stopped"],v=2,n={DIAG1:11,DIAG2:8},s={anxiety:2,AN4:1,panic:2,phobia:0,phobia_type:0,obsessions:1,compulsions:2,depression_criterion_1:3,depression_criterion_2:3,depression_criterion_3:3,NEURAS:0,score:16,somatic:1,hypochondria:2,irritability:0,concentration:0,fatigue:0,sleep:1,sleep_detail:1,depression:6,weight_detail:0,depressive_ideas:3,worry:2},I={summary:`
      <h1>CIS-R output</h1>
      <div class="datetime text-muted">
        <span class="date">${r.toLocaleDateString()}</span>
        <span class="time">${r.toLocaleTimeString()}</span>
      </div>
      <div class="disclaimer my-2 small">
        The results should only be used in conjunction with a clinical assessment
      </div>
      <ul class="major-output list-unstyled">
        <li class="d-flex">
          <strong class="label">Primary Diagnosis:</strong>
          <span class="value flex-grow-1 text-end">${t[n.DIAG1]}</span>
        </li>
        <li class="d-flex">
          <strong class="label">Secondary Diagnosis:</strong>
          <span class="value flex-grow-1 text-end">${t[n.DIAG2]}</span>
        </li>
        <li class="d-flex">
          <strong class="label">Total score:</strong>
          <span class="value flex-grow-1 text-end">${s.score}</span>
        </li>
      </ul>
      <ul class="minor-output list-unstyled">
        <li class="d-flex ">
          <strong class="label">Somatic symptoms:</strong>
          <span class="value flex-grow-1 text-end">${s.somatic}</span>
        </li>
        <li class="d-flex ">
          <strong class="label">Worry over Physical Health:</strong>
          <span class="value flex-grow-1 text-end">${s.hypochondria}</span>
        </li>
        <li class="d-flex ">
          <strong class="label">Irritability:</strong>
          <span class="value flex-grow-1 text-end">${s.irritability}</span>
        </li>
        <li class="d-flex ">
          <strong class="label">Poor concentration:</strong>
          <span class="value flex-grow-1 text-end">${s.concentration}</span>
        </li>
        <li class="d-flex ">
          <strong class="label">Fatigue:</strong>
          <span class="value flex-grow-1 text-end">${s.fatigue}</span>
        </li>
        <li class="d-flex flex-wrap ">
          <strong class="label">Sleep problems:</strong>
          <span class="value flex-grow-1 text-end">${s.sleep}</span>
        </li>
          <p class="detail small ms-4 my-0 text-justify">
            Patient reports early morning waking
          </p>
        <li class="d-flex flex-wrap mark">
          <strong class="label">Depression:</strong>
          <span class="value flex-grow-1 text-end">${s.depression}</span>
        </li>
          <p class="detail small ms-4 my-0 text-justify d-none">
            Patient has gained more than half a stone in weight
          </p>
        <li class="d-flex mark">
          <strong class="label">Depressive Ideas:</strong>
          <span class="value flex-grow-1 text-end">${s.depressive_ideas}</span>
        </li>
        <li class="d-flex ">
          <strong class="label">Phobias:</strong>
          <span class="value flex-grow-1 text-end">${s.phobia}</span>
        </li>
        <li class="d-flex ">
          <strong class="label">Worry:</strong>
          <span class="value flex-grow-1 text-end">${s.worry}</span>
        </li>
        <li class="d-flex ">
          <strong class="label">Anxiety:</strong>
          <span class="value flex-grow-1 text-end">${s.anxiety}</span>
        </li>
        <li class="d-flex ">
          <strong class="label">Panic:</strong>
          <span class="value flex-grow-1 text-end">${s.panic}</span>
        </li>
        <li class="d-flex ">
          <strong class="label">Compulsions:</strong>
          <span class="value flex-grow-1 text-end">${s.compulsions}</span>
        </li>
        <li class="d-flex ">
          <strong class="label">Obsessions:</strong>
          <span class="value flex-grow-1 text-end">${s.obsessions}</span>
        </li>
        <li class="d-flex mark">
          <strong class="label">Social Impairment:</strong>
          <span class="value flex-grow-1 text-end">${b[v]}</span>
        </li>
      </ul>
      `,key_data:{time:r.toUTCString(),primary_diagnosis_code:n.DIAG1,primary_diagnosis_label:t[n.DIAG1],secondary_diagnosis_code:n.DIAG2,secondary_diagnosis_label:t[n.DIAG2],total_score:s.score},items:d.filter(a=>typeof a.answers<"u").map(a=>{const l=a.answers;return{id:a.id,question:a.question,answer:{value:l.value,label:l.label}}}),datetime:r.toUTCString()};return(a,l)=>{var p;return A(),o(x,null,[y("header",null,[(p=_(i).display)!=null&&p.banner_html?(A(),o("div",{key:0,class:"navbar",innerHTML:_(i).display.banner_html},null,8,g)):R("",!0)]),y("main",f,[c(m,{content:I})])],64)}}});const B=h(q,[["__scopeId","data-v-47675b53"]]);export{B as default};
