export class Element {
  id: string;
  extension: Extension[];
  resourceType: string;
}

export class Resource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  resourceType: string;
}

/**
 * The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past,
 * and the end date in the future, which means that period is expected/planned to end at that time.
 * The high value includes any matching date/time. i.e. 2012-02-03T10:00:00 is in a period that has a end value of 2012-02-03.
 */
export class Period extends Element {
  id: string;
  extension: Extension[];
  start: Date;
  end: Date;
}

/**
 * (I)ndicates that this coding was chosen by a user directly - i.e. off a pick list of available items (codes or displays).
 * Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There
 * is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify
 * the use of this element and its consequences more completely.
 */
export class Coding extends Element {
  id: string;
  extension: Extension[];
  system: string;
  version: string;
  code: string;
  display: string;
  userSelected: boolean;
}

/**
 (T)he high limit. The boundary is inclusive.
 If the high element is missing, the high boundary is not known.
 */


export class FHIRRange extends Element {
  id: string;
  extension: Extension[];
  low: Quantity;
  high: Quantity;
}

/**
 (A) computer processable form of the unit in some unit representation system.
 The preferred system is UCUM, but SNOMED CT can also be used (for customary units) or ISO 4217 for currency.  The context of use may additionally require a code from a particular system.
 */
export class Quantity extends Element {
  id: string;
  extension: Extension[];
  value: number;
  comparator: string;
  unit: string;
  system: string;
  code: string;
}

/**
 (T)he number of bytes of data that make up this attachment.
 The number of bytes is redundant if the data is provided as a base64binary, but is useful if the data is provided as a url reference.
 */
export class Attachment extends Element {
  id: string;
  extension: Extension[];
  contentType: string;
  language: string;
  data: string;
  url: string;
  size: number;
  hash: string;
  title: string;
  creation: Date;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class Ratio extends Element {
  id: string;
  extension: Extension[];
  numerator: Quantity;
  denominator: Quantity;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class Annotation extends Element {
  id: string;
  extension: Extension[];
  authorX: Reference;
  time: Date;
  text: string;
}

/**
 (T)he number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.
 If there is more than one dimension, the code for the type of data will define the meaning of the dimensions (typically ECG data).
 */
export class SampledData extends Element {
  id: string;
  extension: Extension[];
  origin: Quantity;
  period: number;
  factor: number;
  lowerLimit: number;
  upperLimit: number;
  dimensions: number;
  data: string;
}

/**
 (P)lain text narrative that identifies the resource in addition to the resource reference.
 This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.
 */
export class Reference extends Element {
  id: string;
  extension: Extension[];
  reference: string;
  display: string;
}

/**
 (A) human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.
 Very often the text is the same as a displayName of one of the codings.
 */
export class CodeableConcept extends Element {
  id: string;
  extension: Extension[];
  coding: Coding[];
  text: string;
}

/**
 (O)rganization that issued/manages the identifier.
 The reference may be just a text description of the assigner.
 */
export class Identifier extends Element {
  id: string;
  extension: Extension[];
  use: string;
  type: CodeableConcept;
  system: string;
  value: string;
  period: Period;
  assigner: Reference;
}

/**
 (T)he base64 encoding of the Signature content.
 Where the signature type is an XML DigSig, the signed content is a FHIR Resource(s), the signature is of the XML form of the Resource(s) using  XML-Signature (XMLDIG) "Detached Signature" form.
 */
export class Signature extends Element {
  id: string;
  extension: Extension[];
  type: Coding[];
  when: string;
  whoX: string;
  contentType: string;
  blob: string;
}

/**
 (I)dentifies a concept from an external specification that roughly corresponds to this element.
 Mappings are not necessarily specific enough for safe translation.
 */
export class ElementDefinition extends Element {
  id: string;
  extension: Extension[];
  path: string;
  representation: string[];
  name: string;
  label: string;
  code: Coding[];
  slicing: Element;
  short: string;
  definition: string;
  comments: string;
  requirements: string;
  alias: string[];
  min: number;
  max: string;
  base: Element;
  type: Element[];
  nameReference: string;
  defaultValueX: boolean;
  meaningWhenMissing: string;
  fixedX: boolean;
  patternX: boolean;
  exampleX: boolean;
  minValueX: boolean;
  maxValueX: boolean;
  maxLength: number;
  condition: string[];
  constraint: Element[];
  mustSupport: boolean;
  isModifier: boolean;
  isSummary: boolean;
  binding: Element;
  mapping: Element[];
}

/**
 (A) code for the timing pattern. Some codes such as BID are ubiquitous, but many institutions define their own additional codes.
 A repeat should always be defined except for the common codes BID, TID, QID, AM and PM, which all systems are required to understand.
 */
export class Timing extends Element {
  id: string;
  extension: Extension[];
  event: Date[];
  repeat: Element;
  code: CodeableConcept;
}

/**
 (C)ountry - a nation as commonly understood or generally accepted.
 ISO 3166 3 letter codes can be used in place of a full country name.
 */
export class Address extends Element {
  id: string;
  extension: Extension[];
  use: string;
  type: string;
  text: string;
  line: string[];
  city: string;
  district: string;
  state: string;
  postalCode: string;
  country: string;
  period: Period;
}

/**
 (G)iven name.
 If only initials are recorded, they may be used in place of the full name.  Not called "first name" since given names do not always come first.
 */
export class HumanName extends Element {
  id: string;
  extension: Extension[];
  use: string;
  text: string;
  family: string[];
  given: string[];
  prefix: string[];
  suffix: string[];
  period: Period;
}

/**
 (T)ags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource.
 The tags can be updated without changing the stated version of the resource.  The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.
 */
export class Meta extends Element {
  id: string;
  extension: Extension[];
  versionId: string;
  lastUpdated: string;
  profile: string[];
  security: Coding[];
  tag: Coding[];
}

/**
 (S)pecifies a preferred order in which to use a set of contacts. Contacts are ranked with lower values coming before higher values.
 Note that rank does not necessarily follow the order in which the contacts are represented in the instance.
 */
export class ContactPoint extends Element {
  id: string;
  extension: Extension[];
  system: string;
  value: string;
  use: string;
  rank: number;
  period: Period;
}

/**
 (S)ource of the definition for the extension code - a logical name or a URL.
 The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition should be version specific.  This will ideally be the URI for the Resource Profile defining the extension, with the code for the extension after a #.
 */
export class Extension extends Element {
  id: string;
  extension: Extension[];
  url: string;
  valueX: boolean;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class BackboneElement extends Element {
  id: string;
  extension: Extension[];
  modifierExtension: Extension[];
}

/**
 (T)he actual narrative content, a stripped down version of XHTML.
 The contents of the html element are an XHTML fragment containing only the basic html formatting elements described in chapters 7-11 and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained stylesheets. The XHTML content may not contain a head, a body, external stylesheet references, scripts, forms, base/link/xlink, frames, iframes and objects.
 */
export class Narrative extends Element {
  id: string;
  extension: Extension[];
  status: string;
  div: string;
}

/**
 (T)he base language in which the resource is written.
 Language is provided to support indexing and accessibility (typically, services such as text to speech use the language tag). The html language tag in the narrative applies  to the narrative. The language tag on the resource may be used to specify the language of other presentations generated from the data in the resource  Not all the content has to be in the base language. The Resource.language should not be assumed to apply to the narrative automatically. If a language is specified, it should it also be specified on the div element in the html (see rules in HTML5 for information about the relationship between xml:lang and the html lang attribute).
 */
export class Parameters extends Resource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  parameter: BackboneElement[];
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class DomainResource extends Resource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
}

/**
 (T)he anatomical location where this condition manifests itself.
 May be a summary code, or a reference to a very precise definition of the location, or both.
 */
export class Condition extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  patient: Reference;
  encounter: Reference;
  asserter: Reference;
  dateRecorded: Date;
  code: CodeableConcept;
  category: CodeableConcept;
  clinicalStatus: string;
  verificationStatus: string;
  severity: CodeableConcept;
  onsetX: Date;
  abatementX: Date;
  stage: BackboneElement;
  evidence: BackboneElement[];
  bodySite: CodeableConcept[];
  notes: string;
}

/**
 (I)ndicates the sites on the subject's body where the procedure should be performed (I.e. the target sites).
 Only used if not implicit in the code found in ProcedureRequest.type.
 */
export class ProcedureRequest extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  subject: Reference;
  code: CodeableConcept;
  bodySite: CodeableConcept[];
  reasonX: CodeableConcept;
  scheduledX: Date;
  encounter: Reference;
  performer: Reference;
  status: string;
  notes: Annotation[];
  asNeededX: boolean;
  orderedOn: Date;
  orderer: Reference;
  priority: string;
}

/**
 (I)ndicates current operational status of the device. For example: On, Off, Standby, etc.
 OperationalStatus for the MDS, VMD, or Channel will be bound to a specific ValueSet that is defined in its profile.
 */
export class DeviceComponent extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  type: CodeableConcept;
  identifier: Identifier;
  lastSystemChange: string;
  source: Reference;
  parent: Reference;
  operationalStatus: CodeableConcept[];
  parameterGroup: CodeableConcept;
  measurementPrinciple: string;
  productionSpecification: BackboneElement[];
  languageCode: CodeableConcept;
}

/**
 (D)escribes the unit that an observed value determined for this metric will have. For example: Percent, Seconds, etc.
 DeviceMetric.unit can be referred to either UCUM or preferable RTMMS coding system.
 */
export class DeviceMetric extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  type: CodeableConcept;
  identifier: Identifier;
  unit: CodeableConcept;
  source: Reference;
  parent: Reference;
  operationalStatus: string;
  color: string;
  category: string;
  measurementPeriod: Timing;
  calibration: BackboneElement[];
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class Communication extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  category: CodeableConcept;
  sender: Reference;
  recipient: Reference[];
  payload: BackboneElement[];
  medium: CodeableConcept[];
  status: string;
  encounter: Reference;
  sent: Date;
  received: Date;
  reason: CodeableConcept[];
  subject: Reference;
  requestDetail: Reference;
}

/**
 (C)ontact for the organization for a certain purpose.
 Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export class Organization extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  active: boolean;
  type: CodeableConcept;
  name: string;
  telecom: ContactPoint[];
  address: Address[];
  partOf: Reference;
  contact: BackboneElement[];
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class ProcessRequest extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  action: string;
  identifier: Identifier[];
  ruleset: Coding;
  originalRuleset: Coding;
  created: Date;
  target: Reference;
  provider: Reference;
  organization: Reference;
  request: Reference;
  response: Reference;
  nullify: boolean;
  reference: string;
  item: BackboneElement[];
  include: string[];
  exclude: string[];
  period: Period;
}

/**
 (I)dentifies the traits shared by members of the group.
 All the identified characteristics must be true for an entity to a member of the group.
 */
export class Group extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  type: string;
  actual: boolean;
  code: CodeableConcept;
  name: string;
  quantity: number;
  characteristic: BackboneElement[];
  member: BackboneElement[];
}

/**
 (A) value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.
 Expansion is performed to produce a collection of codes that are ready to use for data entry or validation.
 */
export class ValueSet extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  url: string;
  identifier: Identifier;
  version: string;
  name: string;
  status: string;
  experimental: boolean;
  publisher: string;
  contact: BackboneElement[];
  date: Date;
  lockedDate: Date;
  description: string;
  useContext: CodeableConcept[];
  immutable: boolean;
  requirements: string;
  copyright: string;
  extensible: boolean;
  codeSystem: BackboneElement;
  compose: BackboneElement;
  expansion: BackboneElement;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class Coverage extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  issuer: Reference;
  bin: Identifier;
  period: Period;
  type: Coding;
  subscriberId: Identifier;
  identifier: Identifier[];
  group: string;
  plan: string;
  subPlan: string;
  dependent: number;
  sequence: number;
  subscriber: Reference;
  network: Identifier;
  contract: Reference[];
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class ImmunizationRecommendation extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  patient: Reference;
  recommendation: BackboneElement[];
}

/**
 (A)dditional comments about the appointment.
 Additional text to aid in facilitating the appointment. For instance, a comment might be, "patient should proceed immediately to infusion room upon arrival"

 Where this is a planned appointment and the start/end dates are not set then this field can be used to provide additional guidance on the details of the appointment request, including any restrictions on when to book it.
 */
export class Appointment extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  status: string;
  type: CodeableConcept;
  reason: CodeableConcept;
  priority: number;
  description: string;
  start: string;
  end: string;
  minutesDuration: number;
  slot: Reference[];
  comment: string;
  participant: BackboneElement[];
}

/**
 (I)ndicates how the medication is to be used by the patient.
 When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), multiple instances of dosage instructions will need to be supplied to convey the different doses/rates.
 */
export class MedicationDispense extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier;
  status: string;
  patient: Reference;
  dispenser: Reference;
  authorizingPrescription: Reference[];
  type: CodeableConcept;
  quantity: Quantity;
  daysSupply: Quantity;
  medicationX: CodeableConcept;
  whenPrepared: Date;
  whenHandedOver: Date;
  destination: Reference;
  receiver: Reference[];
  note: string;
  dosageInstruction: BackboneElement[];
  substitution: BackboneElement;
}

/**
 (A) textual explanation of the detected issue.
 Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
 */
export class DetectedIssue extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  patient: Reference;
  category: CodeableConcept;
  severity: string;
  implicated: Reference[];
  detail: string;
  date: Date;
  author: Reference;
  identifier: Identifier;
  reference: string;
  mitigation: BackboneElement[];
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class Slot extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  type: CodeableConcept;
  schedule: Reference;
  freeBusyType: string;
  start: string;
  end: string;
  overbooked: boolean;
  comment: string;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class PaymentNotice extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  ruleset: Coding;
  originalRuleset: Coding;
  created: Date;
  target: Reference;
  provider: Reference;
  organization: Reference;
  request: Reference;
  response: Reference;
  paymentStatus: Coding;
}

/**
 (A)dditional comments about the appointment.
 This comment is particularly important when the responder is declining, tentatively accepting or requesting another time to indicate the reasons why.
 */
export class AppointmentResponse extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  appointment: Reference;
  start: string;
  end: string;
  participantType: CodeableConcept[];
  actor: Reference;
  participantStatus: string;
  comment: string;
}

/**
 (I)dentifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
 If only a code is specified, then it needs to be a code for a specific product.  If more information is required, then the use of the medication resource is recommended.  Note: do not use Medication.name to describe the medication this statement concerns. When the only available information is a text description of the medication, Medication.code.text should be used.
 */
export class MedicationStatement extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  patient: Reference;
  informationSource: Reference;
  dateAsserted: Date;
  status: string;
  wasNotTaken: boolean;
  reasonNotTaken: CodeableConcept[];
  reasonForUseX: CodeableConcept;
  effectiveX: Date;
  note: string;
  supportingInformation: Reference[];
  medicationX: CodeableConcept;
  dosage: BackboneElement[];
}

/**
 (A) page / section in the implementation guide. The root page is the implementation guide home page.
 Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
export class ImplementationGuide extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  url: string;
  version: string;
  name: string;
  status: string;
  experimental: boolean;
  publisher: string;
  contact: BackboneElement[];
  date: Date;
  description: string;
  useContext: CodeableConcept[];
  copyright: string;
  fhirVersion: string;
  dependency: BackboneElement[];
  package: BackboneElement[];
  global: BackboneElement[];
  binary: string[];
  page: BackboneElement;
}

/**
 (A) classification of the type of encounter; e.g. specialist referral, disease management, type of funded care.
 The type can be very important in processing as this could be used in determining if the EpisodeOfCare is relevant to specific government reporting, or other types of classifications.
 */
export class EpisodeOfCare extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  status: string;
  statusHistory: BackboneElement[];
  type: CodeableConcept[];
  condition: Reference[];
  patient: Reference;
  managingOrganization: Reference;
  period: Period;
  referralRequest: Reference[];
  careManager: Reference;
  careTeam: BackboneElement[];
}

/**
 (A) collection of related questions (or further groupings of questions).
 The Questionnaire itself has one "root" group with the actual contents of the Questionnaire.  Information on this root group applies to the questionnaire as a whole.
 */
export class Questionnaire extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  version: string;
  status: string;
  date: Date;
  publisher: string;
  telecom: ContactPoint[];
  subjectType: string[];
  group: BackboneElement;
}

/**
 (T)he clinical service, such as a colonoscopy or an appendectomy, being documented.
 The event needs to be consistent with the type element, though can provide further information if desired.
 */
export class Composition extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier;
  date: Date;
  type: CodeableConcept;
  class: CodeableConcept;
  title: string;
  status: string;
  confidentiality: string;
  subject: Reference;
  author: Reference[];
  attester: BackboneElement[];
  custodian: Reference;
  event: BackboneElement[];
  encounter: Reference;
  section: BackboneElement[];
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class OperationOutcome extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  issue: BackboneElement[];
}

/**
 (A) description of the messaging capabilities of the solution.
 Multiple repetitions allow the documentation of multiple endpoints per solution.
 */
export class Conformance extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  url: string;
  version: string;
  name: string;
  status: string;
  experimental: boolean;
  publisher: string;
  contact: BackboneElement[];
  date: Date;
  description: string;
  requirements: string;
  copyright: string;
  kind: string;
  software: BackboneElement;
  implementation: BackboneElement;
  fhirVersion: string;
  acceptUnknown: string;
  format: string[];
  profile: Reference[];
  rest: BackboneElement[];
  messaging: BackboneElement[];
  document: BackboneElement[];
}

/**
 (T)he significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
 If none of the conditions listed have an outcome of "death" specified, that indicates that none of the specified conditions are known to have been the primary cause of death.
 */
export class FamilyMemberHistory extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  patient: Reference;
  date: Date;
  status: string;
  name: string;
  relationship: CodeableConcept;
  gender: string;
  bornX: Period;
  ageX: Quantity;
  deceasedX: boolean;
  note: Annotation;
  condition: BackboneElement[];
}

/**
 (I)ndicates how the system may be identified when referenced in electronic exchange.
 Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
 */
export class NamingSystem extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  name: string;
  status: string;
  kind: string;
  publisher: string;
  contact: BackboneElement[];
  responsible: string;
  date: Date;
  type: CodeableConcept;
  description: string;
  useContext: CodeableConcept[];
  usage: string;
  uniqueId: BackboneElement[];
  replacedBy: Reference;
}

/**
 (T)he actual content of the media - inline or by direct reference to the media source file.
 Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dicom can contain the transfer syntax as a parameter.  For an media that covers a period of time (video/sound), the content.creationTime is the end time. Creation time is used for tracking, organizing versions and searching.
 */
export class Media extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  type: string;
  subtype: CodeableConcept;
  identifier: Identifier[];
  subject: Reference;
  operator: Reference;
  view: CodeableConcept;
  deviceName: string;
  height: number;
  width: number;
  frames: number;
  duration: number;
  content: Attachment;
}

/**
 (T)he actual content, base64 encoded.
 If the content type is itself base64 encoding, then this will be base64 encoded twice - what is created by un-base64ing the content must be the specified content type.
 */
export class Binary extends Resource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  contentType: string;
  content: string;
}

/**
 (A) collection of times that the Service Site is available.
 More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export class HealthcareService extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  providedBy: Reference;
  serviceCategory: CodeableConcept;
  serviceType: BackboneElement[];
  location: Reference;
  serviceName: string;
  comment: string;
  extraDetails: string;
  photo: Attachment;
  telecom: ContactPoint[];
  coverageArea: Reference[];
  serviceProvisionCode: CodeableConcept[];
  eligibility: CodeableConcept;
  eligibilityNote: string;
  programName: string[];
  characteristic: CodeableConcept[];
  referralMethod: CodeableConcept[];
  publicKey: string;
  appointmentRequired: boolean;
  availableTime: BackboneElement[];
  notAvailable: BackboneElement[];
  availabilityExceptions: string;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class VisionPrescription extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  dateWritten: Date;
  patient: Reference;
  prescriber: Reference;
  encounter: Reference;
  reasonX: CodeableConcept;
  dispense: BackboneElement[];
}

/**
 (T)he clinical context in which the document was prepared.
 These values are primarily added to help with searching for interesting/relevant documents.
 */
export class DocumentReference extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  masterIdentifier: Identifier;
  identifier: Identifier[];
  subject: Reference;
  type: CodeableConcept;
  class: CodeableConcept;
  author: Reference[];
  custodian: Reference;
  authenticator: Reference;
  created: Date;
  indexed: string;
  status: string;
  docStatus: CodeableConcept;
  relatesTo: BackboneElement[];
  description: string;
  securityLabel: CodeableConcept[];
  content: BackboneElement[];
  context: BackboneElement;
}

/**
 (C)ategorical data indicating that an adverse event is associated in time to an immunization.
 A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case,  it should be recorded as a new [[[AllergyIntolerance]]] resource instance as most systems will not query against  past Immunization.reaction elements.
 */
export class Immunization extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  status: string;
  date: Date;
  vaccineCode: CodeableConcept;
  patient: Reference;
  wasNotGiven: boolean;
  reported: boolean;
  performer: Reference;
  requester: Reference;
  encounter: Reference;
  manufacturer: Reference;
  location: Reference;
  lotNumber: string;
  expirationDate: Date;
  site: CodeableConcept;
  route: CodeableConcept;
  doseQuantity: Quantity;
  note: Annotation[];
  explanation: BackboneElement;
  reaction: BackboneElement[];
  vaccinationProtocol: BackboneElement[];
}

/**
 (D)igital Signature - base64 encoded. XML DigSIg or a JWT.
 The signature could be created by the "author" of the bundle or by the originating device.   Requirements around inclusion of a signature, verification of signatures and treatment of signed/non-signed bundles is implementation-environment specific.
 */
export class Bundle extends Resource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  type: string;
  total: number;
  link: BackboneElement[];
  entry: BackboneElement[];
  signature: Signature;
}

/**
 (A) tag to add to any resource that matches the criteria, after the subscription is processed.
 So that other systems can tell which resources have been the subject of a notification.
 */
export class Subscription extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  criteria: string;
  contact: ContactPoint[];
  reason: string;
  status: string;
  error: string;
  channel: BackboneElement;
  end: string;
  tag: Coding[];
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class OrderResponse extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  request: Reference;
  date: Date;
  who: Reference;
  orderStatus: string;
  description: string;
  fulfillment: Reference[];
}

/**
 (M)appings for an individual concept in the source to one or more concepts in the target.
 Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given concept may be mapped multiple times with different comments or dependencies.
 */
export class ConceptMap extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  url: string;
  identifier: Identifier;
  version: string;
  name: string;
  status: string;
  experimental: boolean;
  publisher: string;
  contact: BackboneElement[];
  date: Date;
  description: string;
  useContext: CodeableConcept[];
  requirements: string;
  copyright: string;
  sourceX: string;
  targetX: string;
  element: BackboneElement[];
}

/**
 (T)ype of procedure performed.
 For the Procedure.code, LOINC radiology orderables would be a good value set to use.
 */
export class ImagingStudy extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  started: Date;
  patient: Reference;
  uid: string;
  accession: Identifier;
  identifier: Identifier[];
  order: Reference[];
  modalityList: Coding[];
  referrer: Reference;
  availability: string;
  url: string;
  numberOfSeries: number;
  numberOfInstances: number;
  procedure: Reference[];
  interpreter: Reference;
  description: string;
  series: BackboneElement[];
}

/**
 (A) language the practitioner is able to use in patient communication.
 The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems actually code this but instead have it as free text. Hence CodeableConcept instead of code as the data type.
 */
export class Practitioner extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  active: boolean;
  name: HumanName;
  telecom: ContactPoint[];
  address: Address[];
  gender: string;
  birthDate: Date;
  photo: Attachment[];
  practitionerRole: BackboneElement[];
  qualification: BackboneElement[];
  communication: CodeableConcept[];
}

/**
 (D)escribes the intended objective(s) of carrying out the care plan.
 Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
 */
export class CarePlan extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  subject: Reference;
  status: string;
  context: Reference;
  period: Period;
  author: Reference[];
  modified: Date;
  category: CodeableConcept[];
  description: string;
  addresses: Reference[];
  support: Reference[];
  relatedPlan: BackboneElement[];
  participant: BackboneElement[];
  goal: Reference[];
  activity: BackboneElement[];
  note: Annotation;
}

/**
 (A)n entity used in this activity.
 Multiple userIds may be associated with the same Practitioner or other individual across various appearances, each with distinct privileges.
 */
export class Provenance extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  target: Reference[];
  period: Period;
  recorded: string;
  reason: CodeableConcept[];
  activity: CodeableConcept;
  location: Reference;
  policy: string[];
  agent: BackboneElement[];
  entity: BackboneElement[];
  signature: Signature[];
}

/**
 (A) network address on which the device may be contacted directly.
 If the device is running a FHIR server, the network address should  be the root URL from which a conformance statement may be retrieved.
 */
export class Device extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  type: CodeableConcept;
  note: Annotation[];
  status: string;
  manufacturer: string;
  model: string;
  version: string;
  manufactureDate: Date;
  expiry: Date;
  udi: string;
  lotNumber: string;
  owner: Reference;
  location: Reference;
  patient: Reference;
  contact: ContactPoint[];
  url: string;
}

/**
 (A)n absolute URI that is the base structure from which this set of constraints is derived.
 If differential constraints are specified in this structure, they are applied to the base in a "differential" fashion. If there is no base, then the differential constraints cannot be provided (snapshot only). Differential structures are useful for the editing perspective, and snapshot structures are suitable for operational use. The FHIR Project provides a number of tools/services to populate snapshots from differential constraints. Logical Models have a base of "Element" or another logical model.
 */
export class StructureDefinition extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  url: string;
  identifier: Identifier[];
  version: string;
  name: string;
  display: string;
  status: string;
  experimental: boolean;
  publisher: string;
  contact: BackboneElement[];
  date: Date;
  description: string;
  useContext: CodeableConcept[];
  requirements: string;
  copyright: string;
  code: Coding[];
  fhirVersion: string;
  mapping: BackboneElement[];
  kind: string;
  constrainedType: string;
  abstract: boolean;
  contextType: string;
  context: string[];
  base: string;
  snapshot: BackboneElement;
  differential: BackboneElement;
}

/**
 (I)dentifies the period of time the account applies to; e.g. accounts created per fiscal year, quarter, etc.
 It is possible for transactions relevant to a coverage period to be posted to the account before or after the coverage period.
 */


export class FHIRAccount extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  name: string;
  type: CodeableConcept;
  status: string;
  activePeriod: Period;
  currency: Coding;
  balance: Quantity;
  coveragePeriod: Period;
  subject: Reference;
  owner: Reference;
  description: string;
}

/**
 (P)atient this order is about.
 May be left blank if the request reference identifies the patient, or if the request is not associated with a patient.
 */
export class Order extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  date: Date;
  subject: Reference;
  source: Reference;
  target: Reference;
  reasonX: CodeableConcept;
  when: BackboneElement;
  detail: Reference[];
}

/**
 (I)dentifies medications, devices and any other substance used as part of the procedure.
 For devices actually implanted or removed, use Procedure.device.
 */
export class Procedure extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  subject: Reference;
  status: string;
  category: CodeableConcept;
  code: CodeableConcept;
  notPerformed: boolean;
  reasonNotPerformed: CodeableConcept[];
  bodySite: CodeableConcept[];
  reasonX: CodeableConcept;
  performer: BackboneElement[];
  performedX: Date;
  encounter: Reference;
  location: Reference;
  outcome: CodeableConcept;
  report: Reference[];
  complication: CodeableConcept[];
  followUp: CodeableConcept[];
  request: Reference;
  notes: Annotation[];
  focalDevice: BackboneElement[];
  used: Reference[];
}

/**
 (A) code (or set of codes) that identify this substance.
 This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  optionally with translations to the standard drug codes.
 */
export class Substance extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  category: CodeableConcept[];
  code: CodeableConcept;
  description: string;
  instance: BackboneElement[];
  ingredient: BackboneElement[];
}

/**
 (A) group of questions to a possibly similarly grouped set of questions in the questionnaire response.
 The Questionnaire itself has one "root" group with the actual contents of the Questionnaire.
 */
export class QuestionnaireResponse extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier;
  questionnaire: Reference;
  status: string;
  subject: Reference;
  author: Reference;
  authored: Date;
  source: Reference;
  encounter: Reference;
  group: BackboneElement;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class DeviceUseRequest extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  bodySiteX: CodeableConcept;
  status: string;
  device: Reference;
  encounter: Reference;
  identifier: Identifier[];
  indication: CodeableConcept[];
  notes: string[];
  prnReason: CodeableConcept[];
  orderedOn: Date;
  recordedOn: Date;
  subject: Reference;
  timingX: Timing;
  priority: string;
}

/**
 (R)ich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent.
 "application/pdf" is recommended as the most reliable and interoperable in this context.
 */
export class DiagnosticReport extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  status: string;
  category: CodeableConcept;
  code: CodeableConcept;
  subject: Reference;
  encounter: Reference;
  effectiveX: Date;
  issued: string;
  performer: Reference;
  request: Reference[];
  specimen: Reference[];
  result: Reference[];
  imagingStudy: Reference[];
  image: BackboneElement[];
  conclusion: string;
  codedDiagnosis: CodeableConcept[];
  presentedForm: Attachment[];
}

/**
 (A) code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
 Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) should be marked as "primary". Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
 */
export class Medication extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  code: CodeableConcept;
  isBrand: boolean;
  manufacturer: Reference;
  product: BackboneElement;
  package: BackboneElement;
}

/**
 (T)he actual data of the message - a reference to the root/focus class of the event.
 The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
 */
export class MessageHeader extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  timestamp: string;
  event: Coding;
  response: BackboneElement;
  source: BackboneElement;
  destination: BackboneElement[];
  enterer: Reference;
  author: Reference;
  receiver: Reference;
  responsible: Reference;
  reason: CodeableConcept;
  data: Reference[];
}

/**
 (I)dentifier assigned by the dispensing facility when the item(s) is dispensed.
 This is assigned by the dispenser, and used to refer to this order in other external standards.
 */
export class SupplyDelivery extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier;
  status: string;
  patient: Reference;
  type: CodeableConcept;
  quantity: Quantity;
  suppliedItem: Reference;
  supplier: Reference;
  whenPrepared: Period;
  time: Date;
  destination: Reference;
  receiver: Reference[];
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class Schedule extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  type: CodeableConcept[];
  actor: Reference;
  planningHorizon: Period;
  comment: string;
}

/**
 (R)elated identifiers or resources associated with the DocumentManifest.
 May be identifiers or resources that caused the DocumentManifest to be created.
 */
export class DocumentManifest extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  masterIdentifier: Identifier;
  identifier: Identifier[];
  subject: Reference;
  recipient: Reference[];
  type: CodeableConcept;
  author: Reference[];
  created: Date;
  source: string;
  status: string;
  description: string;
  content: BackboneElement[];
  related: BackboneElement[];
}

/**
 (D)efines the structure, type, allowed values and other constraining characteristics of the data element.
 For simple data types there will only be one repetition.  For complex data types, multiple repetitions will be present defining a nested structure using the "path" element.
 */
export class DataElement extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  url: string;
  identifier: Identifier[];
  version: string;
  name: string;
  status: string;
  experimental: boolean;
  publisher: string;
  contact: BackboneElement[];
  date: Date;
  useContext: CodeableConcept[];
  copyright: string;
  stringency: string;
  mapping: BackboneElement[];
  element: ElementDefinition[];
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class EligibilityRequest extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  ruleset: Coding;
  originalRuleset: Coding;
  created: Date;
  target: Reference;
  provider: Reference;
  organization: Reference;
}

/**
 (I)dentifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
 If only a code is specified, then it needs to be a code for a specific product.  If more information is required, then the use of the medication resource is recommended.  Note: do not use Medication.name to describe the administered medication. When the only available information is a text description of the medication, Medication.code.text should be used.
 */
export class MedicationAdministration extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  status: string;
  patient: Reference;
  practitioner: Reference;
  encounter: Reference;
  prescription: Reference;
  wasNotGiven: boolean;
  reasonNotGiven: CodeableConcept[];
  reasonGiven: CodeableConcept[];
  effectiveTimeX: Date;
  medicationX: CodeableConcept;
  device: Reference[];
  note: string;
  dosage: BackboneElement;
}

/**
 (L)ist of locations where  the patient has been during this encounter.
 Virtual encounters can be recorded in the Encounter by specifying a location reference to a location of type "kind" such as "client's home" and an encounter.class = "virtual".
 */
export class Encounter extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  status: string;
  statusHistory: BackboneElement[];
  class: string;
  type: CodeableConcept[];
  priority: CodeableConcept;
  patient: Reference;
  episodeOfCare: Reference[];
  incomingReferral: Reference[];
  participant: BackboneElement[];
  appointment: Reference;
  period: Period;
  length: Quantity;
  reason: CodeableConcept[];
  indication: Reference[];
  hospitalization: BackboneElement;
  location: BackboneElement[];
  serviceProvider: Reference;
  partOf: Reference;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class PaymentReconciliation extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  request: Reference;
  outcome: string;
  disposition: string;
  ruleset: Coding;
  originalRuleset: Coding;
  created: Date;
  period: Period;
  organization: Reference;
  requestProvider: Reference;
  requestOrganization: Reference;
  detail: BackboneElement[];
  form: Coding;
  total: Quantity;
  note: BackboneElement[];
}

/**
 (V)ariable is set based either on element value in response body or on header field value in the response headers.
 Variables would be set based either on XPath/JsonPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
 */
export class TestScript extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  url: string;
  version: string;
  name: string;
  status: string;
  identifier: Identifier;
  experimental: boolean;
  publisher: string;
  contact: BackboneElement[];
  date: Date;
  description: string;
  useContext: CodeableConcept[];
  requirements: string;
  copyright: string;
  metadata: BackboneElement;
  multiserver: boolean;
  fixture: BackboneElement[];
  profile: Reference[];
  variable: BackboneElement[];
  setup: BackboneElement;
  test: BackboneElement[];
  teardown: BackboneElement;
}

/**
 (I)f the list is empty, why the list is empty.
 The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
 */
export class List extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  title: string;
  code: CodeableConcept;
  subject: Reference;
  source: Reference;
  encounter: Reference;
  status: string;
  date: Date;
  orderedBy: CodeableConcept;
  mode: string;
  note: string;
  entry: BackboneElement[];
  emptyReason: CodeableConcept;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class DeviceUseStatement extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  bodySiteX: CodeableConcept;
  whenUsed: Period;
  device: Reference;
  identifier: Identifier[];
  indication: CodeableConcept[];
  notes: string[];
  recordedOn: Date;
  subject: Reference;
  timingX: Timing;
}

/**
 (T)he parameters for the operation/query.
 Query Definitions only have one output parameter, named "result". This may not be described, but can be to allow a profile to be defined.
 */
export class OperationDefinition extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  url: string;
  version: string;
  name: string;
  status: string;
  kind: string;
  experimental: boolean;
  publisher: string;
  contact: BackboneElement[];
  date: Date;
  description: string;
  requirements: string;
  idempotent: boolean;
  code: string;
  notes: string;
  base: Reference;
  system: boolean;
  type: string[];
  instance: boolean;
  parameter: BackboneElement[];
}

/**
 (S)tudy identity and locating information of the DICOM SOP instances in the selection.
 Study component represents the study level identity and locator information of the DICOM SOP instances in the selection. It is the top level identity of the hierachical identification of the instances.
 */
export class ImagingObjectSelection extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  uid: string;
  patient: Reference;
  title: CodeableConcept;
  description: string;
  author: Reference;
  authoringTime: Date;
  study: BackboneElement[];
}

/**
 (I)dentifies the change (or lack of change) at the point where the goal was deepmed to be cancelled or achieved.
 Note that this should not duplicate the goal status.
 */
export class Goal extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  subject: Reference;
  startX: Date;
  targetX: Date;
  category: CodeableConcept[];
  description: string;
  status: string;
  statusDate: Date;
  statusReason: CodeableConcept;
  author: Reference;
  priority: CodeableConcept;
  addresses: Reference[];
  note: Annotation[];
  outcome: BackboneElement[];
}

/**
 (A)n XPath expression that returns a set of elements for the search parameter.
 Note that the elements returned by the XPath are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system.
 */
export class SearchParameter extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  url: string;
  name: string;
  status: string;
  experimental: boolean;
  publisher: string;
  contact: BackboneElement[];
  date: Date;
  requirements: string;
  code: string;
  base: string;
  type: string;
  description: string;
  xpath: string;
  xpathUsage: string;
  target: string[];
}

/**
 (T)his modifier is used to convey order-specific modifiers about the type of food that should NOT be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced allergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patientΓÇÖs diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings.
 Information on a patient's food allergies and intolerances, and preferences inform healthcare personnel about the type  of foods that the patient should receive or consume.
 */
export class NutritionOrder extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  patient: Reference;
  orderer: Reference;
  identifier: Identifier[];
  encounter: Reference;
  dateTime: Date;
  status: string;
  allergyIntolerance: Reference[];
  foodPreferenceModifier: CodeableConcept[];
  excludeFoodModifier: CodeableConcept[];
  oralDiet: BackboneElement;
  supplement: BackboneElement[];
  enteralFormula: BackboneElement;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class ClaimResponse extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  request: Reference;
  ruleset: Coding;
  originalRuleset: Coding;
  created: Date;
  organization: Reference;
  requestProvider: Reference;
  requestOrganization: Reference;
  outcome: string;
  disposition: string;
  payeeType: Coding;
  item: BackboneElement[];
  addItem: BackboneElement[];
  error: BackboneElement[];
  totalCost: Quantity;
  unallocDeductable: Quantity;
  totalBenefit: Quantity;
  paymentAdjustment: Quantity;
  paymentAdjustmentReason: Coding;
  paymentDate: Date;
  paymentAmount: Quantity;
  paymentRef: Identifier;
  reserved: Coding;
  form: Coding;
  note: BackboneElement[];
  coverage: BackboneElement[];
}

/**
 (T)he healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request.
 There will be a primary receiver. But the request can be received by any number of "copied to" providers or organizations.
 */
export class ReferralRequest extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  status: string;
  identifier: Identifier[];
  date: Date;
  type: CodeableConcept;
  specialty: CodeableConcept;
  priority: CodeableConcept;
  patient: Reference;
  requester: Reference;
  recipient: Reference[];
  encounter: Reference;
  dateSent: Date;
  reason: CodeableConcept;
  description: string;
  serviceRequested: CodeableConcept[];
  supportingInformation: Reference[];
  fulfillmentTime: Period;
}

/**
 (T)his a list of the general problems/conditions for a patient.
 e.g. The patient is a pregnant, and cardiac congestive failure, ΓÇÄAdenocarcinoma, and is allergic to penicillin.
 */
export class ClinicalImpression extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  patient: Reference;
  assessor: Reference;
  status: string;
  date: Date;
  description: string;
  previous: Reference;
  problem: Reference[];
  triggerX: CodeableConcept;
  investigations: BackboneElement[];
  protocol: string;
  summary: string;
  finding: BackboneElement[];
  resolved: CodeableConcept[];
  ruledOut: BackboneElement[];
  prognosis: string;
  plan: Reference[];
  action: Reference[];
}

/**
 (D)escription of anatomical location.
 This Description  could include any visual markings used to orientate the viewer e.g. external reference points, special sutures, ink markings.
 */
export class BodySite extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  patient: Reference;
  identifier: Identifier[];
  code: CodeableConcept;
  modifier: CodeableConcept[];
  description: string;
  image: Attachment[];
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class Flag extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  category: CodeableConcept;
  status: string;
  period: Period;
  subject: Reference;
  encounter: Reference;
  author: Reference;
  code: CodeableConcept;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class CommunicationRequest extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  category: CodeableConcept;
  sender: Reference;
  recipient: Reference[];
  payload: BackboneElement[];
  medium: CodeableConcept[];
  requester: Reference;
  status: string;
  encounter: Reference;
  scheduledX: Date;
  reason: CodeableConcept[];
  requestedOn: Date;
  subject: Reference;
  priority: CodeableConcept;
}

/**
 (T)he category of claim this is.
 Affects which fields and value sets are used.
 */
export class Claim extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  type: string;
  identifier: Identifier[];
  ruleset: Coding;
  originalRuleset: Coding;
  created: Date;
  target: Reference;
  provider: Reference;
  organization: Reference;
  use: string;
  priority: Coding;
  fundsReserve: Coding;
  enterer: Reference;
  facility: Reference;
  prescription: Reference;
  originalPrescription: Reference;
  payee: BackboneElement;
  referral: Reference;
  diagnosis: BackboneElement[];
  condition: Coding[];
  patient: Reference;
  coverage: BackboneElement[];
  exception: Coding[];
  school: string;
  accident: Date;
  accidentType: Coding;
  interventionException: Coding[];
  item: BackboneElement[];
  additionalMaterials: Coding[];
  missingTeeth: BackboneElement[];
}

/**
 (D)escribes the expected outcome for the subject.
 Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 */
export class RiskAssessment extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  subject: Reference;
  date: Date;
  condition: Reference;
  encounter: Reference;
  performer: Reference;
  identifier: Identifier;
  method: CodeableConcept;
  basis: Reference[];
  prediction: BackboneElement[];
  mitigation: string;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class EnrollmentRequest extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  ruleset: Coding;
  originalRuleset: Coding;
  created: Date;
  target: Reference;
  provider: Reference;
  organization: Reference;
  subject: Reference;
  coverage: Reference;
  relationship: Coding;
}

/**
 (T)he organization responsible for the provisioning and upkeep of the location.
 This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
 */


export class FHIRLocation extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  status: string;
  name: string;
  description: string;
  mode: string;
  type: CodeableConcept;
  telecom: ContactPoint[];
  address: Address;
  physicalType: CodeableConcept;
  position: BackboneElement;
  managingOrganization: Reference;
  partOf: Reference;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class ExplanationOfBenefit extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  request: Reference;
  outcome: string;
  disposition: string;
  ruleset: Coding;
  originalRuleset: Coding;
  created: Date;
  organization: Reference;
  requestProvider: Reference;
  requestOrganization: Reference;
}

/**
 (A)dditional narrative about the propensity for the Adverse Reaction, not captured in other fields.
 For example: including reason for flagging a seriousness of 'High Risk'; and instructions related to future exposure or administration of the Substance, such as administration within an Intensive Care Unit or under corticosteroid cover. The notes should be related to an allergy or intolerance as a condition in general and not related to any particular episode of it. For episode notes and descriptions, use AllergyIntolerance.event.description and  AllergyIntolerance.event.notes.
 */
export class AllergyIntolerance extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  onset: Date;
  recordedDate: Date;
  recorder: Reference;
  patient: Reference;
  reporter: Reference;
  substance: CodeableConcept;
  status: string;
  criticality: string;
  type: string;
  category: string;
  lastOccurence: Date;
  note: Annotation;
  reaction: BackboneElement[];
}

/**
 (S)ome observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations.
 For a discussion on the ways Observations can assembled in groups together see [Notes below](observation.html#4.20.4).
 */
export class Observation extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  status: string;
  category: CodeableConcept;
  code: CodeableConcept;
  subject: Reference;
  encounter: Reference;
  effectiveX: Date;
  issued: string;
  performer: Reference[];
  valueX: Quantity;
  dataAbsentReason: CodeableConcept;
  interpretation: CodeableConcept;
  comments: string;
  bodySite: CodeableConcept;
  method: CodeableConcept;
  specimen: Reference;
  device: Reference;
  referenceRange: BackboneElement[];
  related: BackboneElement[];
  component: BackboneElement[];
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class Contract extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier;
  issued: Date;
  applies: Period;
  subject: Reference[];
  authority: Reference[];
  domain: Reference[];
  type: CodeableConcept;
  subType: CodeableConcept[];
  action: CodeableConcept[];
  actionReason: CodeableConcept[];
  actor: BackboneElement[];
  valuedItem: BackboneElement[];
  signer: BackboneElement[];
  term: BackboneElement[];
  bindingX: Attachment;
  friendly: BackboneElement[];
  legal: BackboneElement[];
  rule: BackboneElement[];
}

/**
 (A) contact detail for the person, e.g. a telephone number or an email address.
 Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently, and also to help with identification.
 */
export class RelatedPerson extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  patient: Reference;
  relationship: CodeableConcept;
  name: HumanName;
  telecom: ContactPoint[];
  gender: string;
  birthDate: Date;
  address: Address[];
  photo: Attachment[];
  period: Period;
}

/**
 (I)dentifies the patient, practitioner, device or any other resource that is the "focus" of this resource.
 Optional as not all resources potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
 */
export class Basic extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  code: CodeableConcept;
  subject: Reference;
  author: Reference;
  created: Date;
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class ProcessResponse extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  request: Reference;
  outcome: Coding;
  disposition: string;
  ruleset: Coding;
  originalRuleset: Coding;
  created: Date;
  organization: Reference;
  requestProvider: Reference;
  requestOrganization: Reference;
  form: Coding;
  notes: BackboneElement[];
  error: Coding[];
}

/**
 (R)eference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen.
 The parent specimen could be the source from which the┬ácurrent specimen is derived by┬ásome processing step┬á(e.g. an┬áaliquot or┬áisolate┬áor extracted nucleic acids┬áfrom clinical┬ásamples)┬áor┬áone of many specimens that┬áwere combined┬áto create a pooled sample.
 */
export class Specimen extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  status: string;
  type: CodeableConcept;
  parent: Reference[];
  subject: Reference;
  accessionIdentifier: Identifier;
  receivedTime: Date;
  collection: BackboneElement;
  treatment: BackboneElement[];
  container: BackboneElement[];
}

/**
 (S)pecific instances of data or objects that have been accessed.
 Required unless the values for Event Identification, Active Participant Identification, and Audit Source Identification are sufficient to document the entire auditable event. Because events may have more than one participant object, this group can be a repeating set of values.
 */
export class AuditEvent extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  event: BackboneElement;
  participant: BackboneElement[];
  source: BackboneElement;
  object: BackboneElement[];
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class EnrollmentResponse extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  request: Reference;
  outcome: string;
  disposition: string;
  ruleset: Coding;
  originalRuleset: Coding;
  created: Date;
  organization: Reference;
  requestProvider: Reference;
  requestOrganization: Reference;
}

/**
 (T)he item that is requested to be supplied.
 Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
 */
export class SupplyRequest extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  patient: Reference;
  source: Reference;
  date: Date;
  identifier: Identifier;
  status: string;
  kind: CodeableConcept;
  orderedItem: Reference;
  supplier: Reference[];
  reasonX: CodeableConcept;
  when: BackboneElement;
}

/**
 (L)ink to another patient resource that concerns the same actual patient.
 There is no assumption that linked patient records have mutual links.
 */
export class Patient extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  active: boolean;
  name: HumanName[];
  telecom: ContactPoint[];
  gender: string;
  birthDate: Date;
  deceasedX: boolean;
  address: Address[];
  maritalStatus: CodeableConcept;
  multipleBirthX: boolean;
  photo: Attachment[];
  contact: BackboneElement[];
  animal: BackboneElement;
  communication: BackboneElement[];
  careProvider: Reference[];
  managingOrganization: Reference;
  link: BackboneElement[];
}

/**
 (M)ay be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
 There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
 */
export class EligibilityResponse extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  request: Reference;
  outcome: string;
  disposition: string;
  ruleset: Coding;
  originalRuleset: Coding;
  created: Date;
  organization: Reference;
  requestProvider: Reference;
  requestOrganization: Reference;
}

/**
 (I)ndicates how the medication is to be used by the patient.
 When the dose or rate is intended to change over the entire administration period, e.g. Tapering dose prescriptions, multiple instances of dosage instructions will need to be supplied to convey the different doses/rates. Another common example in institutional settings is 'titration' of an IV medication dose to maintain a specific stated hemodynamic value or range e.g. drug x to be administered to maintain AM (arterial mean) greater than 65.
 */
export class MedicationOrder extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  dateWritten: Date;
  status: string;
  dateEnded: Date;
  reasonEnded: CodeableConcept;
  patient: Reference;
  prescriber: Reference;
  encounter: Reference;
  reasonX: CodeableConcept;
  note: string;
  medicationX: CodeableConcept;
  dosageInstruction: BackboneElement[];
  dispenseRequest: BackboneElement;
  substitution: BackboneElement;
  priorPrescription: Reference;
}

/**
 (O)ne or more addresses for the person.
 Person may have multiple addresses with different uses or applicable periods.
 */
export class Person extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  identifier: Identifier[];
  name: HumanName[];
  telecom: ContactPoint[];
  gender: string;
  birthDate: Date;
  address: Address[];
  photo: Attachment;
  managingOrganization: Reference;
  active: boolean;
  link: BackboneElement[];
}

/**
 (T)he specific diagnostic investigations that are requested as part of this request. Sometimes, there can only be one item per request, but in most contexts, more than one investigation can be requested.
 There would always be at least one item in normal usage, but this is optional so that a workflow can quote order details without having to list the items.
 */
export class DiagnosticOrder extends DomainResource {
  id: string;
  meta: Meta;
  implicitRules: string;
  language: string;
  text: Narrative;
  contained: Resource[];
  extension: Extension[];
  modifierExtension: Extension[];
  subject: Reference;
  orderer: Reference;
  identifier: Identifier[];
  encounter: Reference;
  reason: CodeableConcept[];
  supportingInformation: Reference[];
  specimen: Reference[];
  status: string;
  priority: string;
  event: BackboneElement[];
  item: BackboneElement[];
  note: Annotation[];
}
