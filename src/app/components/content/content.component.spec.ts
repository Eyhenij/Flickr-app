import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentComponent } from './content.component';
import { AppModule } from '../../app.module';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('ContentComponent', () => {
    let contentComponent: ContentComponent;
    let contentFixture: ComponentFixture<ContentComponent>;
    let loader: HarnessLoader;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContentComponent],
            imports: [AppModule]
        }).compileComponents();

        contentFixture = TestBed.createComponent(ContentComponent);
        contentComponent = contentFixture.componentInstance;
        contentFixture.detectChanges();
        loader = TestbedHarnessEnvironment.loader(contentFixture);
    });

    it('should create', () => {
        expect(contentComponent).toBeTruthy();
    });
});
