import { Embeddable, Property } from "@mikro-orm/core";

@Embeddable()
export class Style {
  @Property()
  font_family_id: number;

  @Property()
  font_size: number;

  @Property()
  color: string;

  @Property()
  text_box_color: string;

  @Property()
  background_color?: string;

  constructor(data: {
    font_family_id: number;
    font_size: number;
    color: string;
    text_box_color: string;
    background_color?: string;
  }) {
    this.font_family_id = data.font_family_id;
    this.font_size = data.font_size;
    this.color = data.color;
    this.text_box_color = data.text_box_color;
    this.background_color = data.background_color;
  }
}
