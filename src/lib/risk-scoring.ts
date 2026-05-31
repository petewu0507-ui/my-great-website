// 合同风险评估工具函数
export interface RiskScore {
  level: 'low' | 'medium' | 'high';
  score: number; // 0-100
  factors: string[];
}

export function calculateRiskScore(
  contractType: string,
  clauses: string[],
  missingTerms: string[]
): RiskScore {
  let score = 50; // 基础分
  const factors: string[] = [];

  // 根据合同类型调整
  if (contractType === 'lease') {
    score -= 10;
    factors.push('租赁合同通常有退出成本风险');
  } else if (contractType === 'employment') {
    score -= 15;
    factors.push('劳动合同可能包含竞业限制条款');
  } else if (contractType === 'trade') {
    score -= 20;
    factors.push('贸易合同涉及交付和验收风险');
  }

  // 检查缺失的关键条款
  if (missingTerms.includes('payment')) {
    score -= 25;
    factors.push('缺少付款条款 - 高风险');
  }
  if (missingTerms.includes('termination')) {
    score -= 20;
    factors.push('缺少终止条款 - 中高风险');
  }
  if (missingTerms.includes('acceptance')) {
    score -= 15;
    factors.push('缺少验收条款 - 中等风险');
  }

  // 限制分数范围
  score = Math.max(0, Math.min(100, score));

  // 确定风险等级
  let level: 'low' | 'medium' | 'high';
  if (score >= 70) {
    level = 'low';
  } else if (score >= 40) {
    level = 'medium';
  } else {
    level = 'high';
  }

  return { level, score, factors };
}
