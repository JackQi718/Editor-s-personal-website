import React from 'react';

const skills = [
  'Premiere Pro',
  'After Effects',
  'DaVinci Resolve',
  'Motion Graphics',
  '色彩校正',
  '视觉特效',
  '音频编辑',
  '故事叙述',
];

const SkillsList = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">专业技能</h3>
      <ul className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="flex items-center space-x-2 text-gray-300"
          >
            <span className="w-2 h-2 bg-[#007BFF] rounded-full" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;