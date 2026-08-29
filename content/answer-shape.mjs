const pointPattern=/(?:מהי\s+הנקודה|מהם\s+שיעורי\s+הנקודה|כתבו\s+(?:את\s+)?(?:שיעורי\s+)?הנקודה|מצאו\s+(?:את\s+)?(?:שיעורי\s+)?הנקודה|מצאו\s+(?:את\s+)?נקודת\s+(?:ה)?חיתוך|כתבו\s+(?:את\s+)?נקודת\s+(?:ה)?חיתוך|מהי\s+נקודת\s+(?:ה)?חיתוך|מהם\s+שיעורי\s+נקודת\s+(?:ה)?חיתוך)/;
const explainPattern=/(?:נמק|הסבר|הציגו\s+דרך|כתבו\s+דרך|דרך\s+הפתרון|הצדיקו|הסיקו)/;

export function inferExpectedAnswerShape(item={}){
  if(item.expectedAnswerShape) return item.expectedAnswerShape;
  const text=`${item.text||''} ${item.stem||''} ${item.answerLabel||''}`;
  if(item.choices?.length) return 'choice';
  if(item.answerShape==='ordered-pair'||pointPattern.test(text)) return 'ordered-pair';
  if(item.answerCount>1 && item.responseSpace==='short') return 'multiple-scalars';
  if(explainPattern.test(text)) return 'explanation';
  switch(item.responseSpace){
    case 'short': return 'scalar-or-short-text';
    case 'equation': return 'equation-or-expression';
    case 'ordered-pair': return 'ordered-pair';
    case 'graph': return 'graph';
    case 'table': return 'table-completion';
    case 'lines-2':
    case 'lines-3':
    case 'lines-4':
    case 'full-work':
    case 'geometry-work': return 'worked-solution';
    case 'mixed': return 'mixed';
    case 'explanation': return 'explanation';
    default: return item.responseSpace ? `response:${item.responseSpace}` : 'short-response';
  }
}

export function normalizeQuestionAnswerShapes(question={}){
  const out={...question,expectedAnswerShape:inferExpectedAnswerShape(question)};
  if(Array.isArray(question.subparts)) out.subparts=question.subparts.map(sp=>({...sp,expectedAnswerShape:inferExpectedAnswerShape(sp)}));
  return out;
}
