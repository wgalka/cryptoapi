import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-findandreplace',
  templateUrl: './findandreplace.component.html',
  styleUrls: ['./findandreplace.component.css']
})
export class FindandreplaceComponent implements OnInit {
  str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo a velit id vehicula. Praesent semper nibh et venenatis pulvinar. Nam non commodo neque. Sed venenatis eros id est iaculis, eget mattis est euismod. Proin vel laoreet felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras cursus sodales tortor, eu laoreet risus consequat a. Etiam fringilla tincidunt pellentesque. Phasellus at ipsum arcu." +
    "Nulla at enim laoreet metus cursus sodales. Praesent efficitur venenatis malesuada. Pellentesque a interdum purus. Etiam tempor pellentesque eros. Praesent augue quam, maximus commodo purus aliquam, bibendum rhoncus libero. Vivamus egestas lorem tincidunt.";
  patternTable: any;
  pattternWordTable: any;
  result: any;
  replacedText: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  replaceWith(v: string, s: string) {
    this.replacedText = '';
    this.patternTable = buildPatternTable(v);
    this.pattternWordTable = v.split('');

    this.result = kmp(this.str, v);

    let tempIndex = 0
    let unchangedFragment = '';
    for (let index = 0; index < this.result.length; index++) {
      unchangedFragment = this.str.substr(tempIndex, this.result[index] - tempIndex);
      this.replacedText += unchangedFragment;
      this.replacedText += "<mark>" + s + "</mark>"
      tempIndex = this.result[index] + (v.length);
      if (this.result.length - 1 == index) {
        if (tempIndex != this.str.length) {
          this.replacedText += this.str.substr(tempIndex, this.str.length - tempIndex);
        }
      }
    }
  }


}

function buildPatternTable(word: string): number[] {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < word.length) {
    if (word[prefixIndex] === word[suffixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1;
      suffixIndex += 1;
      prefixIndex += 1;
    } else if (prefixIndex != 0) {
      prefixIndex = patternTable[prefixIndex - 1];
    } else {
      patternTable[suffixIndex] = 0;
      suffixIndex += 1;
    }
  }

  return patternTable;
}

function kmp(text: string, word: string): number[] {
  let match_indices: number[] = [];
  let textIndex = 0;
  let wordIndex = 0;

  const patternTable = buildPatternTable(word);

  while (textIndex < text.length) {
    if (text[textIndex] === word[wordIndex]) {
      if (wordIndex === word.length - 1) {
        match_indices.push((textIndex - word.length) + 1);
      }
      wordIndex += 1;
      textIndex += 1;
    } else if (wordIndex > 0) {
      wordIndex = patternTable[wordIndex - 1];
    } else {
      wordIndex = 0;
      textIndex += 1;
    }
  }

  return match_indices;
}
