import "./Main.css";
import taskImg from "../image-sources/task-automation.svg";
import SectionCompo from "../reuse-compo/SectionCompo";
import runreport from '../image-sources/runreport.svg';
import calandar from '../image-sources/calandar.svg';
import chat from '../image-sources/chat.svg';

const Main = () => {
  const task = {
    contentH1: "Task automation",
    contentPara: `Create new project tasks, schedule a task, or create a recurring task. Get much-needed visibility into assigned work, completed tasks, and overdue tasks.
`,
    contentBtn: 'Learn More ',
  };

  const runRepo = {
    contentH1: "Run reports",
    contentPara: `Monitor business activity by generating reports on everything from quality testing to wastage.`,
    contentBtn: 'Learn More ',
  };

  const calView = {
    contentH1: "Calendar view",
    contentPara: `Our calendar view enables you look at project work visually and measure elapsed time.`,
    contentBtn: 'Learn More ',
  };

  const chatView = {
    contentH1: "Calendar view",
    contentPara: `Our calendar view enables you look at project work visually and measure elapsed time.`,
    contentBtn: 'Learn More ',
  };

  return (
    <div className="main">
      <div className="main-top">
        <h1>Features</h1>
        <p>
          We save users time by reducing the volume of project follow-ups and
          feedback; while delivering key metrics that other multifunctional
          tools do not.
        </p>
      </div>
      <div className='main-middle'>
        <div><img src={taskImg} alt="taskImg" /></div>
        <div className='main-middle-hpb'><SectionCompo heading={task.contentH1} para={task.contentPara}
          btn={task.contentBtn} /></div>
      </div>
      <div className='main-middle'>
      <div className='main-middle-hpb'><SectionCompo heading={calView.contentH1} para={calView.contentPara}
          btn={task.contentBtn} /></div>
        <div><img src={calandar} alt="calandar" /></div>        
      </div>
      <div className='main-middle'>
        <div><img src={runreport} alt="runreport" /></div>
        <div className='main-middle-hpb'><SectionCompo heading={runRepo.contentH1} para={runRepo.contentPara}
          btn={runRepo.contentBtn}/></div>
      </div>
      <div className='main-middle'>
      <div className='main-middle-hpb'><SectionCompo heading={chatView.contentH1} para={chatView.contentPara}
          btn={task.contentBtn} /></div>
        <div><img src={chat} alt="chatView" /></div>        
      </div>
    </div>
  );
};

export default Main;
