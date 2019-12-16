import React from 'react';
import stripHtml from 'string-strip-html';

import SkillList from '~/components/SkillList';

import {
  Container,
  SkillDescriptionBox,
  SkillName,
  SkillDescription,
} from './styles';

import { useChampion } from '~/services/hooks/Champion';

const getSkill = champion => {
  const { activeSkill, passive, spells } = champion;
  const buttons = ['q', 'w', 'e', 'r'];

  if (activeSkill >= -1) {
    if (activeSkill >= 0) {
      return { button: buttons[activeSkill], skill: spells[activeSkill] };
    }

    return {
      button: 'Passiva',
      skill: passive,
    };
  }

  return { button: '', skill: { name: '', description: '' } };
};

export default function Skills() {
  const champion = useChampion();
  const {
    button,
    skill: { name, description },
  } = getSkill(champion);

  return (
    <Container>
      <SkillList />
      <SkillDescriptionBox>
        <SkillName>
          <strong>{button}</strong>
          {name && ` - ${name}`}
        </SkillName>
        <SkillDescription>{stripHtml(description)}</SkillDescription>
      </SkillDescriptionBox>
    </Container>
  );
}
