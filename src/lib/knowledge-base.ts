// Knowledge Base from "Chinese Contracts: What Foreigners Always Miss"

export interface RiskLevel {
  level: 'low' | 'medium' | 'high';
  color: string;
  label: { zh: string; en: string };
}

export interface ContractRisk {
  id: string;
  title: { zh: string; en: string };
  description: { zh: string; en: string };
  riskLevel: RiskLevel;
  whatGoesWrong: { zh: string; en: string };
  whyItMatters: { zh: string; en: string };
  whatToAskFor: { zh: string; en: string };
  riskyWording?: { zh: string; en: string };
  betterWording?: { zh: string; en: string };
  corePoint: { zh: string; en: string };
  negotiationQuestions?: Array<{ zh: string; en: string }>;
}

export const contractRisks: ContractRisk[] = [
  {
    id: 'payment-terms',
    title: {
      zh: '付款条款',
      en: 'Payment Terms'
    },
    description: {
      zh: '价格告诉你标题，付款条件告诉你谁承担融资负担、谁有杠杆作用，以及如果出现问题谁会遭受损失。',
      en: 'The price tells you the headline. The payment terms tell you who carries the financing burden, who has leverage, and who will suffer if something goes wrong.'
    },
    riskLevel: { level: 'high', color: 'risk-high', label: { zh: '高风险', en: 'High Risk' } },
    whatGoesWrong: {
      zh: '合同规定您获得收入分成或合同价格，但对方可以在计算您的金额之前扣除广泛的成本类别。',
      en: 'The contract says you get a revenue share or a contract price, but the other side can deduct broad categories of cost before calculating your amount.'
    },
    whyItMatters: {
      zh: '您的名义百分比可能看起来公平，而您的实际回收变得不可预测。',
      en: 'Your nominal percentage may look fair while your actual recovery becomes unpredictable.'
    },
    whatToAskFor: {
      zh: '明确定义基数：总收入、净收入或允许扣除的封闭列表。将您的付款与您自己的交付和验收挂钩，而不是与无关的上游回收事件挂钩。',
      en: 'Define the base clearly: gross revenue, net revenue, or a closed list of allowed deductions. Tie your payment to your own delivery and acceptance, not to an unrelated upstream recovery event.'
    },
    riskyWording: {
      zh: '平台可在计算您的分成前扣除平台费、推广费用、退款、税费、技术服务费和其他运营成本。',
      en: 'The platform may deduct platform fees, promotional expenses, refunds, taxes, technical service fees, and other operating costs before calculating your share.'
    },
    betterWording: {
      zh: '平台仅可扣除以下项目后计算您的分成：支付处理费、有记录的退款和法律要求的税费。除非书面同意，否则不适用其他扣除。',
      en: 'The platform may deduct only the following items before calculating your share: payment processing fees, documented refunds, and taxes required by law. No other deductions apply unless agreed in writing.'
    },
    corePoint: {
      zh: '这一更改不是表面功夫。它关闭了让强势方在签约后重新定义经济性的包罗万象的短语。',
      en: 'This change is not cosmetic. It closes the catch-all phrase that lets the stronger party redefine the economics after signing.'
    },
    negotiationQuestions: [
      {
        zh: '究竟可以扣除什么？要求封闭列表。如果某个类别未列出，则不应随后通过暗示扣除。',
        en: 'What exactly can be deducted? Ask for a closed list. If a category is not listed, it should not be deducted later by implication.'
      },
      {
        zh: '我什么时候收到付款？将时间与交付、结算日期或验收挂钩 - 而不是与对方的内部审批链挂钩。',
        en: 'When do I get paid? Tie timing to delivery, settlement date, or acceptance - not to the other side\'s internal approval chain.'
      },
      {
        zh: '付款是否可以因为您自己的客户而延迟？除非您明确将该信用风险定价到交易中，否则反对上游依赖。',
        en: 'Can payment be delayed because of your own customer? Push back on upstream dependency unless you are explicitly pricing that credit risk into the deal.'
      }
    ]
  },
  {
    id: 'termination-exit',
    title: {
      zh: '终止和退出成本',
      en: 'Termination and Exit Cost'
    },
    description: {
      zh: '合同在关系顺利时并没有真正受到考验。当一方需要离开时才会受到考验。这在租赁、就业和长期服务或合作安排中尤其如此。',
      en: 'A contract is not really tested when the relationship is smooth. It is tested when one side needs to leave. This is especially true in rentals, employment, and long-running service or cooperation arrangements.'
    },
    riskLevel: { level: 'high', color: 'risk-high', label: { zh: '高风险', en: 'High Risk' } },
    whatGoesWrong: {
      zh: '租户或服务接受方支付罚款、失去押金，并可能被要求支付未来租金或费用。',
      en: 'The tenant or service recipient pays a penalty, loses the deposit, and may still be asked to pay future rent or fees.'
    },
    whyItMatters: {
      zh: '合同将一个退出事件转化为多层付款风险。',
      en: 'The contract turns one exit event into multiple layers of payment exposure.'
    },
    whatToAskFor: {
      zh: '说明罚款是替代未来租金还是在其之上。不要将这个问题悬而未决。要求客观触发条件、通知期和已完成工作或已发生费用的结算规则。',
      en: 'State whether the penalty replaces future rent or is in addition to it. Do not leave that question open. Require objective triggers, notice periods, and settlement rules for work already done or costs already incurred.'
    },
    riskyWording: {
      zh: '如果租户提前终止，租户应支付两个月租金作为罚款。',
      en: 'If the tenant terminates early, the tenant shall pay two months\' rent as a penalty.'
    },
    betterWording: {
      zh: '如果租户提前终止，租户应支付相当于一个月租金的一次性罚款。此罚款替代搬出日期后的任何未来租金索赔。保证金仅应用于记录在案的未付费用。',
      en: 'If the tenant terminates early, the tenant shall pay a one-time penalty equal to one month\'s rent. This penalty replaces any claim for future rent after the move-out date. The security deposit shall be applied toward unpaid charges only once they are documented.'
    },
    corePoint: {
      zh: '更好的版本限制了叠加。它将模糊的威胁转化为明确的退出成本。',
      en: 'The better version limits stacking. It turns a vague threat into a defined exit cost.'
    },
    negotiationQuestions: [
      {
        zh: '如果我提前离开，罚款是否替代未来租金？如果合同没有明确回答这个问题，您应该假设对方可能会试图叠加费用。',
        en: 'If I leave early, does the penalty replace future rent? If the contract does not answer this clearly, you should assume the other side may try to stack charges later.'
      },
      {
        zh: '在什么条件下可以扣留押金？要求记录在案的未付费用或实际损坏，而不是广泛的房东自由裁量权。',
        en: 'Under what conditions can the deposit be withheld? Ask for documented unpaid charges or actual damage, not broad landlord discretion.'
      }
    ]
  },
  {
    id: 'penalties-damages',
    title: {
      zh: '罚款和违约金',
      en: 'Penalties and Liquidated Damages'
    },
    description: {
      zh: '罚款条款并不自动是坏的。在许多合同中，它是正常且有用的。问题始于数字不再跟踪可信的商业损失，或者罚款无限地堆叠在其他补救措施之上。',
      en: 'A penalty clause is not automatically bad. In many contracts, it is normal and useful. The problem starts when the number no longer tracks a credible commercial loss, or when the penalty is piled on top of every other remedy without limit.'
    },
    riskLevel: { level: 'medium', color: 'risk-medium', label: { zh: '中等风险', en: 'Medium Risk' } },
    whatGoesWrong: {
      zh: '一个条款要求罚款、全部损害赔偿、所有费用、所有下游损失以及强势方声称的任何其他损失。',
      en: 'One clause requires a penalty, full damages, all fees, all downstream losses, and any other loss the stronger party claims.'
    },
    whyItMatters: {
      zh: '这种组合造成无限制的敞口，并将罚款变成杠杆武器。',
      en: 'That combination creates open-ended exposure and turns a penalty into a leverage weapon.'
    },
    whatToAskFor: {
      zh: '保留罚款，但定义它是否仅与直接损失并存，以及是否排除间接或推测性损失。确保双方延迟义务都有后果，即使费率不同。',
      en: 'Keep the penalty, but define whether it sits alongside direct losses only and whether indirect or speculative losses are excluded. Make sure both delay obligations have consequences, even if the rates differ.'
    },
    corePoint: {
      zh: '当罚款不再是定价工具而开始成为恐吓工具时，它就变得危险了。',
      en: 'A penalty becomes dangerous when it stops being a pricing tool and starts becoming an intimidation tool.'
    }
  },
  {
    id: 'delivery-acceptance',
    title: {
      zh: '交付、验收和风险转移',
      en: 'Delivery, Acceptance, and Risk Transfer'
    },
    description: {
      zh: '对于贸易和供应合同，这通常是整个协议中最重要的部分。关键问题很简单：何时交付完成？在那一刻之前谁承担损失？之后谁承担？买方仍可检查或拒绝什么？',
      en: 'For trade and supply contracts, this is often the most important section in the entire agreement. The key questions are simple: When is delivery complete? Who bears loss before that moment? Who bears it after? What can the buyer still inspect or reject?'
    },
    riskLevel: { level: 'high', color: 'risk-high', label: { zh: '高风险', en: 'High Risk' } },
    whatGoesWrong: {
      zh: '一旦货物装运、交给承运人、上传到系统或 dropped 到某个位置，交付就被视为完成。',
      en: 'Delivery is deemed complete once the goods are shipped, handed to a carrier, uploaded to a system, or dropped at a location.'
    },
    whyItMatters: {
      zh: '您可能在实际拥有控制权、检查权或证据之前就承担风险。',
      en: 'You can end up taking risk before you have real control, inspection rights, or evidence.'
    },
    whatToAskFor: {
      zh: '将交付与到达、访问和基本检查步骤挂钩 - 特别是涉及实物商品时。说明谁选择承运人、谁为货物投保以及风险何时转移。使用确认的图纸、规格、样品和检查步骤作为主要验收标准。',
      en: 'Tie delivery to arrival, access, and a basic inspection step - especially when physical goods are involved. State who chooses the carrier, who insures the shipment, and when risk shifts. Use confirmed drawings, specifications, samples, and inspection steps as the main acceptance standard.'
    },
    riskyWording: {
      zh: '一旦货物交给承运人，交付即视为完成，所有风险应在该时刻转移给买方。',
      en: 'Delivery is deemed completed once the goods are handed to the carrier, and all risk shall transfer to the Buyer at that time.'
    },
    betterWording: {
      zh: '当货物到达约定目的地且买方完成数量和可见损坏的初步检查时，交付即视为完成。如果卖方安排运输，卖方在到达前对运输过程中造成的损坏负责。',
      en: 'Delivery is deemed completed when the goods arrive at the agreed destination and the Buyer completes initial inspection for quantity and visible damage. If the Seller arranges transportation, the Seller remains responsible for damage caused during transportation before arrival.'
    },
    corePoint: {
      zh: '此措辞使风险与控制保持一致，并保留基本的检查窗口。',
      en: 'This wording aligns risk with control and preserves a basic inspection window.'
    },
    negotiationQuestions: [
      {
        zh: '谁选择承运人？如果卖方选择承运人，很难证明在装运后立即将所有运输风险转移给买方是合理的。',
        en: 'Who chooses the carrier? If the seller chooses the carrier, it is harder to justify shifting all transport risk to the buyer immediately after shipment.'
      },
      {
        zh: '交付在法律上何时完成？不要接受模糊的措辞。合同应说明交付是在装运、到达、检查还是书面验收时发生。',
        en: 'When is delivery legally complete? Do not accept vague wording. The contract should say whether delivery happens at shipment, arrival, inspection, or written acceptance.'
      },
      {
        zh: '如果发现质量问题怎么办？您需要一个检查窗口、拒绝权以及在审查期间是否可以扣留最终付款的明确规则。',
        en: 'What happens if quality problems are found? You need an inspection window, a rejection right, and a clear rule on whether the final payment can be withheld during the review period.'
      }
    ]
  },
  {
    id: 'control-clauses',
    title: {
      zh: '控制条款',
      en: 'Control Clauses'
    },
    description: {
      zh: '有些合同看起来并不具有攻击性，因为没有一句话令人震惊。危险在于几个小的控制权如何加总。',
      en: 'Some contracts do not look aggressive because no single sentence is shocking. The danger sits in how several small control rights add up.'
    },
    riskLevel: { level: 'medium', color: 'risk-medium', label: { zh: '中等风险', en: 'Medium Risk' } },
    whatGoesWrong: {
      zh: '一方可以根据其自己的商业判断改变价格、范围、时间表、发布策略或项目方向。',
      en: 'One party may change pricing, scope, timetable, publication strategy, or project direction based on its own business judgment.'
    },
    whyItMatters: {
      zh: '灵活的条款可以成为将所有不确定性转移到另一方的机制。',
      en: 'A flexible clause can become a mechanism for transferring all uncertainty to the other side.'
    },
    whatToAskFor: {
      zh: '使用重大变更阈值和书面变更流程。要求文件依据、通知以及扣除与争议发票或货物之间的明确联系。延长审查期并将自动验收限制在材料以可用形式实际提供的情况下。',
      en: 'Use a material-change threshold and a written variation process. Require documentary basis, notice, and a clear connection between the deduction and the disputed invoice or goods. Extend the review period and limit automatic acceptance to situations where the materials were actually provided in a usable form.'
    },
    corePoint: {
      zh: '小的控制条款在一方设定标准、控制时间线并将您的沉默视为同意时变得严重。',
      en: 'Small control clauses become serious when they combine: one side sets the standard, controls the timeline, and treats your silence as agreement.'
    }
  },
  {
    id: 'missing-terms',
    title: {
      zh: '缺失关键条款',
      en: 'Missing Key Terms'
    },
    description: {
      zh: '并非每个合同都需要很长。但有些合同失败是因为它们遗漏了决定金钱、履行和证明如何工作的条款。',
      en: 'Not every contract needs to be long. But some contracts fail because they leave out the very terms that decide how money, performance, and proof work.'
    },
    riskLevel: { level: 'medium', color: 'risk-medium', label: { zh: '中等风险', en: 'Medium Risk' } },
    whatGoesWrong: {
      zh: '说明了金额，但触发器、时间表或付款账户不够清晰。卖方必须交付某些东西，但没有验收路径、缺陷通知期和补救流程。',
      en: 'The amount is stated, but the trigger, schedule, or payment account is not clear enough. The seller must deliver something, but there is no acceptance path, no defect notice period, and no cure process.'
    },
    whyItMatters: {
      zh: '没有付款机制的数字不是真正的清晰度。争议然后被推到广泛的争论中而不是结构化证明中。',
      en: 'A number without a payment mechanism is not real clarity. Disputes then get pushed into broad arguments instead of structured proof.'
    },
    whatToAskFor: {
      zh: '具体说明何时、如何、向谁以及针对什么里程碑进行付款。添加基本的验收时间线、问题通知方法和纠正期。说明预付款、已完成工作、材料和持续义务会发生什么。',
      en: 'Specify when, how, to whom, and against what milestone payment is made. Add a basic acceptance timeline, issue notice method, and correction period. State what happens to prepaid amounts, completed work, materials, and ongoing obligations.'
    },
    corePoint: {
      zh: '如果核心问题没有得到解决，合同就不是简单 - 它是不完整的。',
      en: 'A contract is short only if the core problems are still solved. If they are not solved, the contract is not simple - it is incomplete.'
    }
  }
];

export const scenarios = [
  {
    id: 'renting',
    title: { zh: '在中国租房', en: 'Renting in China' },
    icon: 'home',
    risks: ['termination-exit'],
    keyPoints: [
      { zh: '月租和付款周期', en: 'Monthly rent and payment cycle' },
      { zh: '押金金额和退还条件', en: 'Deposit amount and return conditions' },
      { zh: '提前终止规则', en: 'Early termination rules' },
      { zh: '罚款计算以及是否与未付租金或押金扣除叠加', en: 'Penalty calculation and whether it stacks with unpaid rent or deposit deductions' }
    ]
  },
  {
    id: 'employment',
    title: { zh: '在中国工作', en: 'Working in China' },
    icon: 'briefcase',
    risks: ['control-clauses', 'payment-terms'],
    keyPoints: [
      { zh: '加班如何处理', en: 'How overtime is handled' },
      { zh: '绩效工资是否真正可衡量或完全自由裁量', en: 'Whether performance pay is genuinely measurable or fully discretionary' },
      { zh: '离职后限制是否定义并获得补偿', en: 'Whether post-employment restrictions are defined and compensated' },
      { zh: '雇主可以多么容易地改变您的角色、地点或薪酬结构', en: 'How easily the employer can change your role, location, or compensation structure' }
    ]
  },
  {
    id: 'trade',
    title: { zh: '从中国采购或贸易', en: 'Buying from China / Trade' },
    icon: 'package',
    risks: ['delivery-acceptance', 'payment-terms'],
    keyPoints: [
      { zh: '交付在法律上何时完成', en: 'When delivery is legally complete' },
      { zh: '交付前后谁承担风险', en: 'Who bears risk before and after delivery' },
      { zh: '什么算作检查和验收', en: 'What counts as inspection and acceptance' },
      { zh: '生产前、装运前和验收后支付多少', en: 'How much is paid before production, before shipment, and after acceptance' }
    ]
  }
];

export function findRelevantRisks(question: string): ContractRisk[] {
  const lowerQuestion = question.toLowerCase();

  const keywordMap: Record<string, string[]> = {
    'payment-terms': ['payment', 'pay', '付款', '支付', '钱', 'money', 'fee', '费用', 'deduct', '扣除', 'revenue', '收入'],
    'termination-exit': ['terminate', 'exit', 'leave', '终止', '退出', '离开', 'lease', '租赁', 'rent', '租金', 'deposit', '押金', 'penalty', '罚款'],
    'penalties-damages': ['penalty', 'damage', 'liquidated', '罚款', '损害赔偿', '违约', 'breach'],
    'delivery-acceptance': ['delivery', 'accept', 'inspection', 'risk', '交付', '验收', '检查', '风险', 'shipment', '装运', 'carrier', '承运人'],
    'control-clauses': ['control', 'unilateral', 'change', '控制', '单方面', '变更', 'set-off', '抵销', 'withhold', '扣留'],
    'missing-terms': ['missing', 'incomplete', 'unclear', '缺失', '不完整', '不清楚', 'acceptance', '验收', 'settlement', '结算']
  };

  const matchedRisks = new Set<string>();

  Object.entries(keywordMap).forEach(([riskId, keywords]) => {
    if (keywords.some(keyword => lowerQuestion.includes(keyword.toLowerCase()))) {
      matchedRisks.add(riskId);
    }
  });

  if (matchedRisks.size === 0) {
    // Return general advice if no specific match
    return contractRisks.slice(0, 3);
  }

  return contractRisks.filter(risk => matchedRisks.has(risk.id));
}

export function generateResponse(question: string, lang: 'zh' | 'en'): string {
  const relevantRisks = findRelevantRisks(question);

  let response = lang === 'zh'
    ? `根据您的问题，以下是相关的合同风险分析和建议：\n\n`
    : `Based on your question, here are the relevant contract risk analyses and recommendations:\n\n`;

  relevantRisks.forEach((risk, index) => {
    response += `**${index + 1}. ${risk.title[lang]}** (${risk.riskLevel.label[lang]})\n\n`;
    response += `${risk.description[lang]}\n\n`;
    response += `${lang === 'zh' ? '⚠️ 可能出现的问题：' : '⚠️ What goes wrong: '} ${risk.whatGoesWrong[lang]}\n\n`;
    response += `${lang === 'zh' ? '💡 为什么重要：' : '💡 Why it matters: '} ${risk.whyItMatters[lang]}\n\n`;
    response += `${lang === 'zh' ? '✅ 您应该要求：' : '✅ What to ask for: '} ${risk.whatToAskFor[lang]}\n\n`;

    if (risk.negotiationQuestions && risk.negotiationQuestions.length > 0) {
      response += `${lang === 'zh' ? '🗣️ 谈判问题：\n' : '🗣️ Negotiation questions:\n'}`;
      risk.negotiationQuestions.forEach((q, qIndex) => {
        response += `   ${qIndex + 1}. ${q[lang]}\n`;
      });
      response += '\n';
    }

    response += `${lang === 'zh' ? '📌 核心要点：' : '📌 Core point: '} ${risk.corePoint[lang]}\n\n`;
    response += '---\n\n';
  });

  response += lang === 'zh'
    ? `\n💬 **提示：** 如果您需要更具体的建议，请提供更多关于您的合同情况的细节。\n\n⚖️ **免责声明：** 本指南仅供参考和教育用途，不构成法律建议。在签署重要合同前，请咨询当地律师。`
    : `\n💬 **Tip:** If you need more specific advice, please provide more details about your contract situation.\n\n⚖️ **Disclaimer:** This guide is for educational purposes only and does not constitute legal advice. Consult local counsel before signing important contracts.`;

  return response;
}

export const quickQuestions: Array<{ zh: string; en: string; riskId: string }> = [
  {
    zh: '如果我想提前终止租赁合同，我需要支付多少费用？',
    en: 'How much do I need to pay if I want to terminate my lease early?',
    riskId: 'termination-exit'
  },
  {
    zh: '合同说平台可以扣除各种费用后再计算我的分成，这合理吗？',
    en: 'The contract says the platform can deduct various fees before calculating my share. Is this reasonable?',
    riskId: 'payment-terms'
  },
  {
    zh: '货物交给承运人后风险就转移给我了，这样公平吗？',
    en: 'Risk transfers to me once goods are handed to the carrier. Is this fair?',
    riskId: 'delivery-acceptance'
  },
  {
    zh: '合同中罚款加上所有其他赔偿是否过高？',
    en: 'Is a penalty plus all other damages in the contract too high?',
    riskId: 'penalties-damages'
  },
  {
    zh: '对方可以单方面改变价格或范围，这有什么问题？',
    en: 'What\'s wrong with the other party being able to unilaterally change price or scope?',
    riskId: 'control-clauses'
  }
];
